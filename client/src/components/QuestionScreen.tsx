import { useState, useEffect, useCallback } from 'react';
import { Box, Button, Card, CardContent, Typography, CircularProgress, LinearProgress } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { submitAnswer } from '../store/gameSlice';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import TimerIcon from '@mui/icons-material/Timer';

const QUESTION_TIMEOUT = 30; // seconds per question

const QuestionScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    questions,
    currentQuestionIndex,
    score,
    gameId,
    loading,
    isGameOver
  } = useSelector((state: RootState) => state.game);

  const [timeLeft, setTimeLeft] = useState(QUESTION_TIMEOUT);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  // Handle automatic submission when time runs out
  const handleTimeUp = useCallback(async () => {
    if (!isAnswered && gameId && currentQuestion) {
      setIsAnswered(true);
      // Submit with -1 to indicate timeout
      await dispatch(submitAnswer({
        gameId,
        questionId: currentQuestion.id,
        selectedAnswerIndex: -1,
      }));
    }
  }, [dispatch, gameId, currentQuestion, isAnswered]);

  // Timer effect
  useEffect(() => {
    if (loading || isGameOver || isAnswered) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleTimeUp();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [loading, isGameOver, isAnswered, handleTimeUp]);

  // Reset timer when question changes
  useEffect(() => {
    setTimeLeft(QUESTION_TIMEOUT);
    setIsAnswered(false);
  }, [currentQuestionIndex]);

  const handleAnswer = async (answerIndex: number) => {
    if (!gameId || !currentQuestion || isAnswered) return;

    setIsAnswered(true);
    await dispatch(submitAnswer({
      gameId,
      questionId: currentQuestion.id,
      selectedAnswerIndex: answerIndex,
    }));
  };

  // Calculate timer color based on time left
  const getTimerColor = () => {
    if (timeLeft > 20) return 'success.main';
    if (timeLeft > 10) return 'warning.main';
    return 'error.main';
  };

  // Calculate progress for circular timer
  const timerProgress = (timeLeft / QUESTION_TIMEOUT) * 100;

  // If game is over, don't render the question screen
  if (isGameOver) {
    return null;
  }

  if (loading && !currentQuestion) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{
      mt: 4,
      px: 2,
      maxWidth: 800,
      mx: 'auto'
    }}>
      {/* Progress and Score Header */}
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 3
      }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{
            color: 'primary.main',
            fontWeight: 600,
            mb: 1
          }}>
            Question {currentQuestionIndex + 1} of {questions.length}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 8,
              borderRadius: 4,
              bgcolor: 'rgba(0,0,0,0.05)',
              '& .MuiLinearProgress-bar': {
                borderRadius: 4,
                background: 'linear-gradient(90deg, primary.main, primary.light)',
              }
            }}
          />
        </Box>
        <Box sx={{
          ml: 3,
          p: 2,
          borderRadius: 2,
          bgcolor: 'primary.main',
          color: 'white',
          textAlign: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            {score}
          </Typography>
          <Typography variant="caption">
            POINTS
          </Typography>
        </Box>
      </Box>

      {/* Question Card */}
      <Card sx={{
        mb: 4,
        borderRadius: 3,
        boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
        background: 'linear-gradient(135deg, #ffffff 0%, #f8faf2 100%)',
        position: 'relative',
        overflow: 'visible',
      }}>
        <CardContent sx={{ p: 4 }}>
          {/* Timer Display */}
          <Box sx={{
            position: 'absolute',
            top: -20,
            left: 16,
            width: 64,
            height: 64,
            borderRadius: '50%',
            bgcolor: 'background.paper',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress
                variant="determinate"
                value={timerProgress}
                size={56}
                sx={{
                  color: getTimerColor(),
                  '& .MuiCircularProgress-circle': {
                    strokeLinecap: 'round',
                  },
                }}
              />
              <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: getTimerColor(),
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                  }}
                >
                  {timeLeft}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Category and Difficulty Badge */}
          <Box sx={{
            position: 'absolute',
            top: -12,
            right: 16,
            display: 'flex',
            gap: 1,
          }}>
            <Box sx={{
              bgcolor: 'primary.main',
              color: 'white',
              py: 0.5,
              px: 2,
              borderRadius: 2,
              fontSize: '0.85rem',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}>
              <EmojiObjectsIcon sx={{ fontSize: '1rem' }} />
              {currentQuestion.difficulty}
            </Box>
          </Box>

          {/* Question Text */}
          <Typography variant="h5" sx={{
            fontWeight: 600,
            mb: 3,
            color: 'text.primary',
            lineHeight: 1.4,
          }}>
            {currentQuestion.question_text}
          </Typography>

          <Typography
            variant="subtitle2"
            color="text.secondary"
            sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
          >
            <TimerIcon sx={{ fontSize: '1rem' }} />
            Time remaining: 30s
          </Typography>
        </CardContent>
      </Card>

      {/* Answer Options */}
      <Box sx={{ display: 'grid', gap: 2 }}>
        {currentQuestion.choices.map((choice, index) => (
          <Button
            key={index}
            variant="outlined"
            onClick={() => handleAnswer(index)}
            disabled={loading || isGameOver || isAnswered}
            sx={{
              width: '100%',
              justifyContent: 'flex-start',
              borderRadius: 3,
              p: 2.5,
              borderWidth: '2px',
              backgroundColor: 'background.paper',
              transition: 'all 0.2s ease-in-out',
              position: 'relative',
              overflow: 'hidden',
              '&:before': {
                content: '""',
                position: 'absolute',
                left: 0,
                width: '4px',
                height: '100%',
                bgcolor: 'primary.main',
                opacity: 0,
                transition: 'opacity 0.2s',
              },
              '&:hover': {
                borderColor: 'primary.main',
                backgroundColor: 'primary.lighter',
                transform: 'translateY(-2px)',
                '&:before': {
                  opacity: 1,
                },
              },
              '&:active': {
                transform: 'translateY(0)',
              },
              opacity: isAnswered ? 0.7 : 1,
              cursor: isAnswered ? 'not-allowed' : 'pointer',
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
              {choice}
            </Typography>
          </Button>
        ))}
      </Box>

      {/* Time Warning */}
      {timeLeft <= 10 && !isAnswered && (
        <Typography
          sx={{
            color: 'error.main',
            textAlign: 'center',
            mt: 2,
            fontWeight: 'bold',
            animation: 'pulse 1s infinite',
            '@keyframes pulse': {
              '0%': { opacity: 1 },
              '50%': { opacity: 0.5 },
              '100%': { opacity: 1 },
            },
          }}
        >
          Hurry up! Time is running out!
        </Typography>
      )}
    </Box>
  );
};

export default QuestionScreen;