import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  CircularProgress,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Alert,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import {
  setPlayerName,
  setSelectedCategory,
  fetchCategories,
  fetchQuestionSets,
  startGame,
} from '../store/gameSlice';

const WelcomeScreen = () => {
  const [name, setName] = useState('');
  const [selectedQuestionSet, setSelectedQuestionSet] = useState<number | ''>('');
  const dispatch = useDispatch<AppDispatch>();

  const {
    categories,
    questionSets,
    selectedCategory,
    loading,
    error,
  } = useSelector((state: RootState) => state.game);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    if (selectedCategory) {
      dispatch(fetchQuestionSets(selectedCategory));
    }
  }, [selectedCategory, dispatch]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && selectedQuestionSet) {
      dispatch(setPlayerName(name.trim()));
      await dispatch(startGame(selectedQuestionSet));
    }
  };

  const handleCategoryChange = (category: string) => {
    setSelectedQuestionSet('');
    dispatch(setSelectedCategory(category));
  };

  if (loading && !categories.length) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Welcome to the Trivia Game!
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <TextField
        fullWidth
        label="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ mb: 2 }}
        required
      />

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Select Category</InputLabel>
        <Select
          value={selectedCategory}
          label="Select Category"
          onChange={(e) => handleCategoryChange(e.target.value)}
          required
        >
          {categories.map((category) => (
            <MenuItem key={category.name} value={category.name}>
              {category.name} ({category.set_count} sets)
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {selectedCategory && (
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Select Question Set</InputLabel>
          <Select
            value={selectedQuestionSet}
            label="Select Question Set"
            onChange={(e) => setSelectedQuestionSet(Number(e.target.value))}
            required
          >
            {questionSets.map((set) => (
              <MenuItem key={set.id} value={set.id}>
                {set.name} - {set.difficulty} ({set.question_count} questions)
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      <Button
        type="submit"
        variant="contained"
        size="large"
        disabled={!name.trim() || !selectedQuestionSet || loading}
        sx={{ mt: 2 }}
      >
        {loading ? <CircularProgress size={24} /> : 'Start Game'}
      </Button>
    </Box>
  );
};

export default WelcomeScreen;