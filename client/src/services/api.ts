import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

export interface Category {
  name: string;
  set_count: number;
  difficulty_levels: string[];
}

export interface QuestionSet {
  id: number;
  name: string;
  description: string;
  category: string;
  difficulty: string;
  question_count: number;
}

export interface Question {
  id: number;
  question_text: string;
  choices: string[];
  category: string;
  difficulty: string;
  explanation: string;
}

export interface GameState {
  current_question_index: number;
  score: number;
  total_questions: number;
  is_finished: boolean;
}

const formatUrlParam = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
};

const api = {
  // Get all categories
  getCategories: async (): Promise<Category[]> => {
    const response = await axios.get(`${API_BASE_URL}/categories`);
    return response.data;
  },

  // Get question sets for a category
  getCategoryQuestionSets: async (category: string): Promise<QuestionSet[]> => {
    const formattedCategory = formatUrlParam(category);
    const response = await axios.get(`${API_BASE_URL}/question-sets/${formattedCategory}`);
    return response.data;
  },

  // Start a new game
  createGame: async (questionSetId: number) => {
    const response = await axios.post(`${API_BASE_URL}/games?question_set_id=${questionSetId}`);
    return response.data;
  },

  // Get current question
  getCurrentQuestion: async (gameId: string): Promise<Question> => {
    const response = await axios.get(`${API_BASE_URL}/games/${gameId}/question`);
    return response.data;
  },

  // Submit answer
  submitAnswer: async (gameId: string, questionId: number, selectedAnswerIndex: number) => {
    const response = await axios.post(`${API_BASE_URL}/games/${gameId}/answer`, {
      question_id: questionId,
      selected_answer_index: selectedAnswerIndex
    });
    return response.data;
  },

  // Get game state
  getGameState: async (gameId: string): Promise<GameState> => {
    const response = await axios.get(`${API_BASE_URL}/games/${gameId}/state`);
    return response.data;
  },

  // End game
  endGame: async (gameId: string) => {
    await axios.delete(`${API_BASE_URL}/games/${gameId}`);
  }
};

export default api;