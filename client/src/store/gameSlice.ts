import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import api, { Category, QuestionSet, Question } from '../services/api';

interface GameSliceState {
  categories: Category[];
  questionSets: QuestionSet[];
  selectedCategory: string;
  gameId: string | null;
  questions: Question[];
  currentQuestionIndex: number;
  score: number;
  isGameOver: boolean;
  playerName: string;
  loading: boolean;
  error: string | null;
}

const initialState: GameSliceState = {
  categories: [],
  questionSets: [],
  selectedCategory: '',
  gameId: null,
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  isGameOver: false,
  playerName: '',
  loading: false,
  error: null,
};

// Async thunks
export const fetchCategories = createAsyncThunk(
  'game/fetchCategories',
  async () => {
    return await api.getCategories();
  }
);

export const fetchQuestionSets = createAsyncThunk(
  'game/fetchQuestionSets',
  async (category: string) => {
    return await api.getCategoryQuestionSets(category);
  }
);

export const startGame = createAsyncThunk(
  'game/startGame',
  async (questionSetId: number) => {
    const gameResponse = await api.createGame(questionSetId);
    const firstQuestion = await api.getCurrentQuestion(gameResponse.game_id);
    return {
      gameId: gameResponse.game_id,
      question: firstQuestion,
    };
  }
);

export const submitAnswer = createAsyncThunk(
  'game/submitAnswer',
  async ({ gameId, questionId, selectedAnswerIndex }: {
    gameId: string;
    questionId: number;
    selectedAnswerIndex: number;
  }) => {
    const response = await api.submitAnswer(gameId, questionId, selectedAnswerIndex);
    const gameState = await api.getGameState(gameId);
    let nextQuestion = null;

    if (!gameState.is_finished) {
      nextQuestion = await api.getCurrentQuestion(gameId);
    }

    return {
      isCorrect: response.correct,
      gameState,
      nextQuestion,
    };
  }
);

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setPlayerName: (state, action: PayloadAction<string>) => {
      state.playerName = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    resetGame: (state) => {
      state.currentQuestionIndex = 0;
      state.score = 0;
      state.isGameOver = false;
      state.gameId = null;
      state.questions = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Categories
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch categories';
      })
      // Fetch Question Sets
      .addCase(fetchQuestionSets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuestionSets.fulfilled, (state, action) => {
        state.loading = false;
        state.questionSets = action.payload;
      })
      .addCase(fetchQuestionSets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch question sets';
      })
      // Start Game
      .addCase(startGame.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(startGame.fulfilled, (state, action) => {
        state.loading = false;
        state.gameId = action.payload.gameId;
        state.questions = [action.payload.question];
        state.currentQuestionIndex = 0;
        state.score = 0;
        state.isGameOver = false;
      })
      .addCase(startGame.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to start game';
      })
      // Submit Answer
      .addCase(submitAnswer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitAnswer.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.isCorrect) {
          state.score += 1;
        }
        if (action.payload.gameState.is_finished) {
          state.isGameOver = true;
        } else if (action.payload.nextQuestion) {
          state.questions.push(action.payload.nextQuestion);
          state.currentQuestionIndex += 1;
        }
      })
      .addCase(submitAnswer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to submit answer';
      });
  },
});

export const { setPlayerName, setSelectedCategory, resetGame } = gameSlice.actions;
export default gameSlice.reducer;