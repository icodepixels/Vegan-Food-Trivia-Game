# Vegan Food Trivia Game API

A RESTful API for a vegan-friendly food trivia game featuring questions about world cuisines, cooking basics, food science, and culinary history. Each question includes detailed explanations to enhance learning.

## Features

- Multiple categories and difficulty levels
- Question sets focused on vegan and plant-based topics
- Detailed explanations for each answer to promote learning
- Session-based gameplay
- Real-time game state tracking
- Comprehensive API documentation
- Input validation and error handling

## Prerequisites

- Python 3.7+
- pip (Python package installer)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd trivia-game-2025
```

2. Create a virtual environment (recommended):
```bash
python -m venv venv
source venv/bin/activate  # On Windows, use: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

## Running the API

Start the API server:
```bash
uvicorn api:app --reload
```

The API will be available at `http://localhost:8000`

## API Documentation

Once the server is running, you can access the interactive API documentation:
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

### Available Endpoints

#### Categories
- `GET /categories` - Get all available categories with statistics

#### Question Sets
- `GET /question-sets` - Get all available question sets
- `GET /question-sets/{category}` - Get question sets for a specific category

#### Game Management
- `POST /games` - Start a new game with a specific question set
- `GET /games/{game_id}/state` - Get the current state of a game
- `GET /games/{game_id}/question` - Get the current question
- `POST /games/{game_id}/answer` - Submit an answer and receive explanation
- `DELETE /games/{game_id}` - End a game session

## Usage Examples

### Starting a New Game

```bash
curl -X POST "http://localhost:8000/games?question_set_id=1" -H "accept: application/json"
```

Response:
```json
{
  "game_id": "550e8400-e29b-41d4-a716-446655440000",
  "question_set": {
    "id": 1,
    "name": "Asian Cuisine Explorer",
    "description": "Discover the diverse flavors and dishes of Asian cuisine!",
    "category": "World Cuisines",
    "difficulty": "Easy-Medium",
    "question_count": 3
  },
  "total_questions": 3
}
```

### Getting the Current Question

```bash
curl -X GET "http://localhost:8000/games/550e8400-e29b-41d4-a716-446655440000/question" -H "accept: application/json"
```

Response:
```json
{
  "id": 1,
  "question_text": "Which country did tempura cooking originate from?",
  "choices": ["China", "Korea", "Japan", "Thailand"],
  "category": "World Cuisines",
  "difficulty": "Easy"
}
```

### Submitting an Answer

```bash
curl -X POST "http://localhost:8000/games/550e8400-e29b-41d4-a716-446655440000/answer" \
     -H "accept: application/json" \
     -H "Content-Type: application/json" \
     -d '{"question_id": 1, "selected_answer_index": 2}'
```

Response:
```json
{
  "correct": true,
  "correct_answer_index": 2,
  "explanation": "Although tempura is now a key part of Japanese cuisine, it was actually introduced by Portuguese missionaries in the 16th century. The word 'tempura' comes from the Latin word 'tempora', which refers to 'times' or 'seasons' when meat wasn't eaten."
}
```

## Game Categories

1. **World Cuisines**
   - Asian Cuisine (Japanese, Thai, Indian, etc.)
   - European Food (Italian, French, Greek, etc.)
   - Latin American Flavors (Mexican, Brazilian, Peruvian)
   - Mediterranean Delights (Lebanese, Turkish, Moroccan)
   - African Cuisine (Ethiopian, West African, North African)
   - Middle Eastern Specialties

2. **Cooking Basics**
   - Kitchen Tools & Equipment
   - Cooking Methods
   - Baking Fundamentals
   - Professional Knife Skills
   - Plant-Based Substitutes
   - Advanced Cooking Techniques

3. **Food Science**
   - Ingredients Science
   - Food Preservation
   - Molecular Gastronomy
   - Fermentation & Probiotics
   - Nutrition Science
   - Food Chemistry

4. **Food History**
   - Food Origins
   - Food Traditions
   - Ancient Foods
   - Spice Trade History
   - Ancient Grains
   - Vegetarian History

## Educational Value

- Each question includes a detailed explanation providing historical context, scientific reasoning, or cultural significance
- Explanations enhance learning beyond simple right/wrong answers
- Content covers diverse culinary traditions, techniques, and scientific principles
- Special focus on sustainable and plant-based food knowledge

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- All questions are focused on vegan and plant-based topics
- Questions cover diverse culinary traditions and techniques
- Special attention to cultural accuracy and educational value
- Explanations sourced from reliable culinary and historical references
