# Vegan Food Trivia Game API

A RESTful API for a vegan-friendly food trivia game featuring questions about world cuisines, cooking basics, food science, and culinary history. Each question includes detailed explanations to enhance learning.

## Features

- Multiple categories and difficulty levels
- 30+ diverse question sets
- Detailed explanations for each answer
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

## Game Categories and Sets

### 1. World Cuisines
- **Asian Cuisine Explorer** (Easy-Medium)
  - Traditional Japanese, Chinese, Korean dishes
  - Cooking techniques and ingredients
- **European Food Journey** (Medium-Hard)
  - Classic European recipes and methods
  - Regional specialties and traditions
- **Latin American Flavors** (Easy-Medium)
  - Traditional preparations and ingredients
  - Cultural significance of dishes
- **Mediterranean Delights** (Medium-Hard)
  - Healthy Mediterranean cooking
  - Traditional preparation methods
- **Southeast Asian Flavors** (Medium)
  - Vietnamese, Thai, and Indonesian cuisine
  - Traditional herbs and spices
- **Regional Indian Cuisine** (Medium-Hard)
  - Diverse regional specialties
  - Traditional cooking techniques
- **East Asian Traditions** (Medium)
  - Chinese, Korean, and Japanese traditions
  - Cultural cooking methods

### 2. Cooking Basics
- **Kitchen Tools & Equipment** (Easy-Medium)
  - Essential kitchen implements
  - Proper tool usage and care
- **Cooking Methods** (Easy-Medium)
  - Basic cooking techniques
  - Temperature and timing
- **Baking Fundamentals** (Medium)
  - Plant-based baking principles
  - Ingredient substitutions
- **Professional Knife Skills** (Medium-Hard)
  - Cutting techniques
  - Knife care and safety
- **Kitchen Organization** (Easy)
  - Mise en place principles
  - Efficient kitchen setup
- **Temperature Control** (Medium)
  - Heat management
  - Cooking precision
- **Flavor Building** (Medium-Hard)
  - Taste balancing
  - Seasoning techniques

### 3. Food Science
- **Ingredients Science** (Medium-Hard)
  - Chemical properties of ingredients
  - Cooking reactions
- **Food Preservation** (Medium)
  - Traditional and modern methods
  - Safety principles
- **Molecular Gastronomy** (Hard)
  - Modern cooking techniques
  - Scientific principles
- **Fermentation & Probiotics** (Medium)
  - Traditional fermentation
  - Health benefits
- **Plant Protein Science** (Hard)
  - Protein sources and composition
  - Nutritional considerations
- **Food Chemistry Basics** (Medium-Hard)
  - Chemical reactions in cooking
  - Ingredient interactions
- **Kitchen Physics** (Hard)
  - Physical principles in cooking
  - Heat transfer and dynamics

### 4. Food History
- **Food Origins** (Medium-Hard)
  - Historical food development
  - Cultural evolution
- **Food Traditions** (Medium)
  - Cultural celebrations
  - Traditional practices
- **Ancient Food History** (Medium-Hard)
  - Historical cooking methods
  - Traditional ingredients
- **Spice Trade History** (Medium-Hard)
  - Historical trade routes
  - Cultural exchange
- **Ancient Cooking Methods** (Medium)
  - Traditional techniques
  - Historical preservation
- **Cultural Food Symbolism** (Medium)
  - Food in ceremonies
  - Cultural significance
- **Evolution of Agriculture** (Hard)
  - Agricultural development
  - Crop domestication

## API Documentation

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

## Educational Features

- **Detailed Explanations**: Each answer includes comprehensive explanations covering:
  - Historical context
  - Scientific principles
  - Cultural significance
  - Practical applications

- **Progressive Learning**: Question sets are organized by difficulty level:
  - Easy: Fundamental concepts
  - Medium: Intermediate techniques
  - Hard: Advanced topics and specialized knowledge

- **Cultural Awareness**: Special focus on:
  - Cultural authenticity
  - Traditional methods
  - Regional variations
  - Historical significance

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
