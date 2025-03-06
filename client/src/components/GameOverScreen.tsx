import { useEffect } from 'react';
import { Box, Button, Typography, CircularProgress } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { resetGame } from '../store/gameSlice';
import api from '../services/api';

const GameOverScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { score, questions, playerName, gameId, loading } = useSelector(
    (state: RootState) => state.game
  );

  useEffect(() => {
    // Clean up the game session when component unmounts
    return () => {
      if (gameId) {
        api.endGame(gameId);
      }
    };
  }, [gameId]);

  const handlePlayAgain = () => {
    dispatch(resetGame());
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Game Over!
      </Typography>

      <Typography variant="h5" sx={{ mb: 3 }}>
        Well done, {playerName}!
      </Typography>

      <Typography variant="h6" sx={{ mb: 4 }}>
        Final Score: {score} out of {questions.length}
      </Typography>

      <Button
        variant="contained"
        size="large"
        onClick={handlePlayAgain}
        sx={{ mt: 2 }}
      >
        Play Again
      </Button>
    </Box>
  );
};

export default GameOverScreen;