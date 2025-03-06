import axios, { AxiosError } from 'axios';

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
}

export interface GameState {
  current_question_index: number;
  score: number;
  total_questions: number;
  is_finished: boolean;
}

interface ApiErrorResponse {
  detail: string;
}

const handleApiError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<ApiErrorResponse>;
    console.error('API Error:', {
      status: axiosError.response?.status,
      data: axiosError.response?.data,
      config: {
        method: axiosError.config?.method,
        url: axiosError.config?.url,
        data: axiosError.config?.data,
      }
    });
    throw new Error(axiosError.response?.data?.detail || axiosError.message);
  }
  throw error;
};

const api = {
  // Get all categories
  getCategories: async (): Promise<Category[]> => {
    try {
      const response = await axios.get(`${API_BASE_URL}/categories`);
      return response.data;
    } catch (error) {
      return handleApiError(error);
    }
  },

  // Get question sets for a category
  getCategoryQuestionSets: async (category: string): Promise<QuestionSet[]> => {
    try {
      const response = await axios.get(`${API_BASE_URL}/question-sets/${category}`);
      return response.data;
    } catch (error) {
      return handleApiError(error);
    }
  },

  // Start a new game
  createGame: async (questionSetId: number) => {
    try {
      console.log('Starting game with question set:', questionSetId);
      const response = await axios.post(`${API_BASE_URL}/games?question_set_id=${questionSetId}`);
      console.log('Game created:', response.data);
      return response.data;
    } catch (error) {
      return handleApiError(error);
    }
  },

  // Get current question
  getCurrentQuestion: async (gameId: string): Promise<Question> => {
    try {
      const response = await axios.get(`${API_BASE_URL}/games/${gameId}/question`);
      return response.data;
    } catch (error) {
      return handleApiError(error);
    }
  },

  // Submit answer
  submitAnswer: async (gameId: string, questionId: number, selectedAnswerIndex: number) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/games/${gameId}/answer`, {
        question_id: questionId,
        selected_answer_index: selectedAnswerIndex
      });
      return response.data;
    } catch (error) {
      return handleApiError(error);
    }
  },

  // Get game state
  getGameState: async (gameId: string): Promise<GameState> => {
    try {
      const response = await axios.get(`${API_BASE_URL}/games/${gameId}/state`);
      return response.data;
    } catch (error) {
      return handleApiError(error);
    }
  },

  // End game
  endGame: async (gameId: string) => {
    try {
      await axios.delete(`${API_BASE_URL}/games/${gameId}`);
    } catch (error) {
      return handleApiError(error);
    }
  }
};

export default api;