from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from questions_db import (
    get_question_sets,
    get_question_set,
    get_sets_by_category,
)
from game_session import GameSessionManager
from api_models import (
    QuestionResponse,
    QuestionSetResponse,
    CategoryResponse,
    AnswerSubmission,
    AnswerResponse,
    GameState,
    NewGameResponse,
)

app = FastAPI(
    title="Trivia Game API",
    description="API for the vegan-friendly food trivia game",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite's default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize the game session manager
game_manager = GameSessionManager()

# Define the difficulty order
DIFFICULTY_ORDER = ['easy', 'easy-medium', 'medium', 'medium-hard', 'hard']

def sort_difficulty_levels(difficulties: set[str]) -> List[str]:
    return sorted(list(difficulties), key=lambda x: DIFFICULTY_ORDER.index(x.lower()) if x.lower() in DIFFICULTY_ORDER else len(DIFFICULTY_ORDER))

def format_category_name(category: str) -> str:
    """Convert URL format back to original category name."""
    return ' '.join(word.capitalize() for word in category.split('-'))

@app.get("/categories", response_model=List[CategoryResponse])
async def get_categories():
    """Get all available categories with their statistics"""
    question_sets = get_question_sets()
    categories = {}

    for qs in question_sets:
        if qs.category not in categories:
            categories[qs.category] = {
                "name": qs.category,
                "set_count": 1,
                "difficulty_levels": {qs.difficulty}
            }
        else:
            categories[qs.category]["set_count"] += 1
            categories[qs.category]["difficulty_levels"].add(qs.difficulty)

    return [
        CategoryResponse(
            name=cat["name"],
            set_count=cat["set_count"],
            difficulty_levels=sort_difficulty_levels(cat["difficulty_levels"])
        )
        for cat in categories.values()
    ]

@app.get("/question-sets", response_model=List[QuestionSetResponse])
async def get_all_question_sets():
    """Get all available question sets"""
    sets = get_question_sets()
    return [
        QuestionSetResponse(
            id=qs.id,
            name=qs.name,
            description=qs.description,
            category=qs.category,
            difficulty=qs.difficulty,
            question_count=len(qs.questions)
        )
        for qs in sets
    ]

@app.get("/question-sets/{category}", response_model=List[QuestionSetResponse])
async def get_category_question_sets(category: str):
    """Get question sets for a specific category"""
    # Convert URL format back to original category name
    original_category = format_category_name(category)

    sets = get_sets_by_category(original_category)
    if not sets:
        raise HTTPException(status_code=404, detail=f"Category '{original_category}' not found")

    return [
        QuestionSetResponse(
            id=qs.id,
            name=qs.name,
            description=qs.description,
            category=qs.category,
            difficulty=qs.difficulty,
            question_count=len(qs.questions)
        )
        for qs in sets
    ]

@app.post("/games", response_model=NewGameResponse)
async def create_game(question_set_id: int):
    """Start a new game with the specified question set"""
    try:
        session = game_manager.create_game(question_set_id)
        question_set = get_question_set(question_set_id)

        return NewGameResponse(
            game_id=session.game_id,
            question_set=QuestionSetResponse(
                id=question_set.id,
                name=question_set.name,
                description=question_set.description,
                category=question_set.category,
                difficulty=question_set.difficulty,
                question_count=len(question_set.questions)
            ),
            total_questions=len(question_set.questions)
        )
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))

@app.get("/games/{game_id}/state", response_model=GameState)
async def get_game_state(game_id: str):
    """Get the current state of a game"""
    session = game_manager.get_session(game_id)
    if not session:
        raise HTTPException(status_code=404, detail="Game not found")

    return GameState(**session.get_state())

@app.get("/games/{game_id}/question", response_model=QuestionResponse)
async def get_current_question(game_id: str):
    """Get the current question for a game"""
    session = game_manager.get_session(game_id)
    if not session:
        raise HTTPException(status_code=404, detail="Game not found")

    question = session.get_current_question()
    if not question:
        raise HTTPException(status_code=400, detail="Game is finished")

    return QuestionResponse(
        id=question.id,
        question_text=question.question_text,
        choices=question.choices,
        category=question.category,
        difficulty=question.difficulty,
        explanation=question.explanation,
    )

@app.post("/games/{game_id}/answer", response_model=AnswerResponse)
async def submit_answer(game_id: str, answer: AnswerSubmission):
    """Submit an answer for the current question"""
    session = game_manager.get_session(game_id)
    if not session:
        raise HTTPException(status_code=404, detail="Game not found")

    current_question = session.get_current_question()
    if not current_question:
        raise HTTPException(status_code=400, detail="Game is finished")

    if current_question.id != answer.question_id:
        raise HTTPException(status_code=400, detail="Answer does not match current question")

    is_correct = session.submit_answer(answer.selected_answer_index)

    return AnswerResponse(
        correct=is_correct,
        correct_answer_index=current_question.correct_answer_index
    )

@app.delete("/games/{game_id}")
async def end_game(game_id: str):
    """End a game session"""
    session = game_manager.get_session(game_id)
    if not session:
        raise HTTPException(status_code=404, detail="Game not found")

    game_manager.end_session(game_id)
    return {"message": "Game ended successfully"}