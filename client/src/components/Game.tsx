import { Box, Container, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import QuestionScreen from './QuestionScreen';
import GameOverScreen from './GameOverScreen';


const Game = () => {
  const { isGameOver, gameId } = useSelector((state: RootState) => state.game);


  if (!gameId) {
    return null;
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Vegan Food Trivia
        </Typography>

        {!isGameOver ? (
          <QuestionScreen />
        ) : (
          <GameOverScreen />
        )}
      </Box>
    </Container>
  );
};

export default Game;