import { Box, Container, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import WelcomeScreen from './WelcomeScreen.tsx';
import QuestionScreen from './QuestionScreen.tsx';
import GameOverScreen from './GameOverScreen.tsx';

const Game = () => {
  const { isGameOver, playerName } = useSelector((state: RootState) => state.game);

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Trivia Game
        </Typography>

        {!playerName && <WelcomeScreen />}
        {playerName && !isGameOver && <QuestionScreen />}
        {isGameOver && <GameOverScreen />}
      </Box>
    </Container>
  );
};

export default Game;