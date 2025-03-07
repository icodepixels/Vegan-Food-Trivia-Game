from typing import List, Optional
from pydantic import BaseModel

class QuestionResponse(BaseModel):
    id: int
    question_text: str
    choices: List[str]
    category: str
    difficulty: str
    explanation: Optional[str] = None

class QuestionWithAnswer(QuestionResponse):
    correct_answer_index: int

class QuestionSetResponse(BaseModel):
    id: int
    name: str
    description: str
    category: str
    difficulty: str
    question_count: int

class CategoryResponse(BaseModel):
    name: str
    set_count: int
    difficulty_levels: List[str]

class AnswerSubmission(BaseModel):
    question_id: int
    selected_answer_index: int

class AnswerResponse(BaseModel):
    correct: bool
    correct_answer_index: int
    explanation: Optional[str] = None

class GameState(BaseModel):
    game_id: str
    current_question_index: int
    total_questions: int
    score: int
    completed: bool
    progress: float

class NewGameResponse(BaseModel):
    game_id: str
    question_set: QuestionSetResponse
    total_questions: int