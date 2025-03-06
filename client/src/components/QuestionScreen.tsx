import { Box, Button, Card, CardContent, Typography, CircularProgress, Alert } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { submitAnswer } from '../store/gameSlice';

const QuestionScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    questions,
    currentQuestionIndex,
    score,
    gameId,
    loading,
    error
  } = useSelector((state: RootState) => state.game);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = async (answerIndex: number) => {
    if (gameId && currentQuestion) {
      await dispatch(submitAnswer({
        gameId,
        questionId: currentQuestion.id,
        selectedAnswerIndex: answerIndex,
      }));
    }
  };

  if (loading && !currentQuestion) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!currentQuestion) {
    return (
      <Typography variant="h6">
        No questions available
      </Typography>
    );
  }

  return (
    <Box sx={{ mt: 4 }}>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Typography variant="h6" sx={{ mb: 2 }}>
        Question {currentQuestionIndex + 1}
      </Typography>

      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        Score: {score}
      </Typography>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {currentQuestion.question_text}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Category: {currentQuestion.category} | Difficulty: {currentQuestion.difficulty}
          </Typography>
        </CardContent>
      </Card>

      <Box sx={{ display: 'grid', gap: 2 }}>
        {currentQuestion.choices.map((choice, index) => (
          <Button
            key={index}
            variant="outlined"
            size="large"
            onClick={() => handleAnswer(index)}
            disabled={loading}
            sx={{ textTransform: 'none' }}
          >
            {choice}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default QuestionScreen;