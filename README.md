# Vegan Food Trivia Game

A full-stack trivia game application featuring questions about world cuisines, cooking basics, food science, and culinary history. Built with React (frontend) and FastAPI (backend).

## Project Structure

```
trivia-game/
├── api/              # Backend API
│   ├── __init__.py
│   ├── api.py       # FastAPI application and endpoints
│   ├── api_models.py # API request/response models
│   ├── game.py      # Game logic
│   ├── game_session.py # Session management
│   ├── main.py      # CLI interface
│   ├── models.py    # Data models
│   ├── questions_db.py # Question database
│   └── requirements.txt
├── client/          # Frontend React application
│   ├── src/         # React source code
│   ├── public/      # Static assets
│   └── package.json # Frontend dependencies
└── README.md
```

## Features

- Multiple categories and difficulty levels
- 30+ diverse question sets
- Detailed explanations for each answer
- Session-based gameplay
- Real-time game state tracking
- Comprehensive API documentation
- Input validation and error handling

## Prerequisites

- Python 3.7+ (Backend)
- Node.js 16+ (Frontend)
- pip (Python package installer)
- npm (Node package manager)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd trivia-game
```

2. Set up the backend:
```bash
# Create a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows, use: venv\Scripts\activate

# Install backend dependencies
cd api
pip install -r requirements.txt
```

3. Set up the frontend:
```bash
cd client
npm install
```

## Development

1. Start the backend server:
```bash
cd api
uvicorn api.main:app --reload
```
The API will be available at `http://localhost:8000`

2. Start the frontend development server:
```bash
cd client
npm run dev
```
The application will be available at `http://localhost:5173`

## Game Categories

### 1. World Cuisines
- Asian Cuisine Explorer (Easy-Medium)
- European Food Journey (Medium-Hard)
- Latin American Flavors (Easy-Medium)
- Mediterranean Delights (Medium-Hard)
- Southeast Asian Flavors (Medium)
- Regional Indian Cuisine (Medium-Hard)
- East Asian Traditions (Medium)

### 2. Cooking Basics
- Kitchen Tools & Equipment (Easy-Medium)
- Cooking Methods (Easy-Medium)
- Baking Fundamentals (Medium)
- Professional Knife Skills (Medium-Hard)
- Kitchen Organization (Easy)
- Temperature Control (Medium)
- Flavor Building (Medium-Hard)

### 3. Food Science
- Ingredients Science (Medium-Hard)
- Food Preservation (Medium)
- Molecular Gastronomy (Hard)
- Fermentation & Probiotics (Medium)
- Plant Protein Science (Hard)
- Food Chemistry Basics (Medium-Hard)
- Kitchen Physics (Hard)

### 4. Food History
- Food Origins (Medium-Hard)
- Food Traditions (Medium)
- Ancient Food History (Medium-Hard)
- Spice Trade History (Medium-Hard)
- Ancient Cooking Methods (Medium)
- Cultural Food Symbolism (Medium)
- Evolution of Agriculture (Hard)

### 5. Sustainable Cooking
- Zero Waste Cooking (Easy-Medium)
- Seasonal Sustainability (Medium)
- Eco-Friendly Cooking (Medium)
- Food Preservation Sustainability (Medium)
- Garden to Table (Medium)
- Sustainable Kitchen Setup (Medium)

### 6. Global Food Culture
- Food Rituals (Medium)
- Celebration Foods (Medium)
- Dining Customs (Medium-Hard)
- Sacred Food Traditions (Medium-Hard)
- Family Food Traditions (Medium)
- Food Superstitions (Medium)

## API Documentation

Once the backend server is running, you can access:
- Interactive API docs: http://localhost:8000/docs
- Alternative API docs: http://localhost:8000/redoc

### Key Endpoints

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

## Educational Features

- **Detailed Explanations**: Each answer includes comprehensive explanations
- **Progressive Learning**: Question sets organized by difficulty level
- **Cultural Awareness**: Focus on authenticity and traditions
- **Regular Updates**: New questions and categories added regularly

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Comprehensive vegan and plant-based focus
- Culturally accurate content
- Educational value prioritized
- Expert-reviewed explanations
- Regular content updates
- Community contributions welcome
