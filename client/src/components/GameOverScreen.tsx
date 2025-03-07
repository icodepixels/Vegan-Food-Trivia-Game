import { useEffect } from 'react';
import {
  Box,
  Button,
  Typography,
  CircularProgress,
  Card,
  CardContent,
  Divider,
  Stack,
  Chip,
  Grid,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { resetGame, removeCompletedQuiz } from '../store/gameSlice';
import api from '../services/api';
import { fetchQuestionSets } from '../store/gameSlice';
import { useNavigate } from 'react-router-dom';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SpeedIcon from '@mui/icons-material/Speed';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ReplayIcon from '@mui/icons-material/Replay';
import ShareIcon from '@mui/icons-material/Share';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TimerIcon from '@mui/icons-material/Timer';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

interface StatsCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

const GameOverScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const {
    score,
    questions,
    gameId,
    loading,
    playerAnswers = [],
    questionSets,
    selectedCategory
  } = useSelector((state: RootState) => state.game);

  const handlePlayAgain = () => {
    const currentQuizId = questionSets.find(set =>
      set.name.toLowerCase().replace(/\s+/g, '-') === window.location.pathname.split('/').pop()
    )?.id;

    if (currentQuizId) {
      dispatch(removeCompletedQuiz(currentQuizId));
    }

    dispatch(resetGame());

    if (selectedCategory) {
      dispatch(fetchQuestionSets(selectedCategory));
    }

    navigate('/');
  };

  const handlePracticeMore = () => {
    dispatch(resetGame());
    navigate('/');
  };

  const handleSimilarQuestions = () => {
    const currentCategory = window.location.pathname.split('/')?.[2];
    navigate(`/category/${currentCategory}`, { replace: true });
    dispatch(resetGame());
  };

  useEffect(() => {
    // Clean up the game session when component unmounts
    return () => {
      if (gameId) {
        api.endGame(gameId);
      }
    };
  }, [gameId]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: '1200px', mx: 'auto', p: 3 }}>
      {/* Celebration Header */}
      <Box sx={{
        textAlign: 'center',
        mb: 6,
        animation: 'slideDown 0.6s ease-out',
        '@keyframes slideDown': {
          from: { transform: 'translateY(-20px)', opacity: 0 },
          to: { transform: 'translateY(0)', opacity: 1 },
        }
      }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            color: 'white',
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
            mb: 2
          }}
        >
          {score === questions.length ? '🎉 Perfect Score! 🎉' : '🎯 Quiz Complete!'}
        </Typography>

        {/* Score Display */}
        <Box sx={{
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 4,
          borderRadius: '20px',
          bgcolor: 'rgba(255,255,255,0.9)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          mb: 4
        }}>
          <Typography variant="h4" color="primary.dark" sx={{ mb: 1 }}>
            Your Score
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              color: score === questions.length ? 'success.main' : 'primary.main'
            }}
          >
            {score}/{questions.length}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {getScoreMessage(score, questions.length)}
          </Typography>
        </Box>

        {/* Stats Row */}
        <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
          <Grid item>
            <StatsCard
              icon={<SpeedIcon />}
              title="Time Taken"
              value={`${Math.floor(Math.random() * 5 + 2)} mins`}
            />
          </Grid>
          <Grid item>
            <StatsCard
              icon={<TrendingUpIcon />}
              title="Accuracy"
              value={`${Math.round((score / questions.length) * 100)}%`}
            />
          </Grid>
          <Grid item>
            <StatsCard
              icon={<EmojiEventsIcon />}
              title="Ranking"
              value={`Top ${Math.floor(Math.random() * 20 + 10)}%`}
            />
          </Grid>
        </Grid>

        {/* Action Buttons */}
        <Box sx={{
          display: 'flex',
          gap: 2,
          justifyContent: 'center',
          mb: 6
        }}>
          <Button
            variant="contained"
            size="large"
            onClick={handlePlayAgain}
            startIcon={<ReplayIcon />}
            sx={{
              borderRadius: '12px',
              py: 1.5,
              px: 4,
              fontSize: '1.1rem',
              fontWeight: 600,
              textTransform: 'none',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
              }
            }}
          >
            Play Another Quiz
          </Button>
          <Button
            variant="outlined"
            size="large"
            startIcon={<ShareIcon />}
            sx={{
              borderRadius: '12px',
              py: 1.5,
              px: 4,
              fontSize: '1.1rem',
              fontWeight: 600,
              textTransform: 'none',
              borderWidth: '2px',
              '&:hover': {
                borderWidth: '2px',
              }
            }}
          >
            Share Results
          </Button>
        </Box>
      </Box>

      {/* Review Section Header */}
      <Typography
        variant="h5"
        sx={{
          mb: 4,
          color: 'white',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}
      >
        <AssignmentIcon /> Review Your Answers
      </Typography>

      <Stack spacing={4} sx={{ mt: 4 }}>
        {questions.map((question, index) => (
          <Card
            key={index}
            sx={{
              bgcolor: playerAnswers[index]?.isCorrect ? 'rgba(232, 245, 233, 0.95)' : 'background.paper',
              borderRadius: '16px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              borderLeft: 6,
              position: 'relative',
              overflow: 'visible',
              borderColor: playerAnswers[index]?.isCorrect ? 'success.main' : 'error.main',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px) scale(1.01)',
                boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)',
              }
            }}
          >
            {/* Score Impact Badge */}
            <Box
              sx={{
                position: 'absolute',
                top: -12,
                left: 20,
                bgcolor: playerAnswers[index]?.isCorrect ? 'success.main' : 'error.main',
                color: 'white',
                py: 0.5,
                px: 2,
                borderRadius: '12px',
                fontSize: '0.85rem',
                fontWeight: 'bold',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                animation: 'slideIn 0.3s ease-out',
                '@keyframes slideIn': {
                  from: { transform: 'translateY(-10px)', opacity: 0 },
                  to: { transform: 'translateY(0)', opacity: 1 },
                }
              }}
            >
              {playerAnswers[index]?.isCorrect ? '+1 Point!' : '0 Points'}
            </Box>

            {/* Achievement Badge */}
            {playerAnswers[index]?.isCorrect && (
              <Box
                sx={{
                  position: 'absolute',
                  top: -12,
                  right: -12,
                  bgcolor: 'success.main',
                  color: 'white',
                  borderRadius: '50%',
                  width: 40,
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                  animation: 'pulse 2s infinite',
                  '@keyframes pulse': {
                    '0%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.1)' },
                    '100%': { transform: 'scale(1)' },
                  },
                  zIndex: 1,
                }}
              >
                <EmojiEventsIcon />
              </Box>
            )}

            <CardContent sx={{ p: 3 }}>
              {/* Question Header with Enhanced Styling */}
              <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 3,
                pb: 2,
                borderBottom: '2px solid',
                borderColor: 'divider',
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: 'text.primary',
                    }}
                  >
                    Question {index + 1}
                  </Typography>
                  <Chip
                    label={playerAnswers[index]?.isCorrect ? "Correct!" : "Incorrect"}
                    color={playerAnswers[index]?.isCorrect ? "success" : "error"}
                    size="small"
                    sx={{
                      fontWeight: 500,
                      px: 1,
                      ml: 2,
                      animation: playerAnswers[index]?.isCorrect ? 'bounce 0.5s' : 'none',
                      '@keyframes bounce': {
                        '0%, 100%': { transform: 'scale(1)' },
                        '50%': { transform: 'scale(1.1)' },
                      },
                    }}
                  />
                </Box>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5
                  }}
                >
                  <TimerIcon sx={{ fontSize: '1rem' }} />
                  {`${Math.floor(Math.random() * 20 + 10)}s`}
                </Typography>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  fontSize: '1.1rem',
                  lineHeight: 1.5,
                  color: 'text.primary',
                }}
              >
                {question.question_text}
              </Typography>

              <Divider sx={{
                my: 3,
                opacity: 0.6,
              }} />

              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: 'rgba(0, 0, 0, 0.02)',
                      borderRadius: '8px',
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      Your Answer:
                    </Typography>
                    <Typography
                      variant="body1"
                      color={playerAnswers[index]?.isCorrect ? "success.main" : "error.main"}
                      sx={{ fontWeight: 500 }}
                    >
                      {question.choices[playerAnswers[index]?.selectedAnswer]}
                    </Typography>
                  </Box>
                </Grid>

                {!playerAnswers[index]?.isCorrect && (
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{
                        p: 2,
                        bgcolor: 'rgba(0, 0, 0, 0.02)',
                        borderRadius: '8px',
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        color="text.secondary"
                        sx={{ mb: 1 }}
                      >
                        Correct Answer:
                      </Typography>
                      <Typography
                        variant="body1"
                        color="success.main"
                        sx={{ fontWeight: 500 }}
                      >
                        {question.choices[playerAnswers[index]?.correctAnswer]}
                      </Typography>
                    </Box>
                  </Grid>
                )}
              </Grid>

              <Box
                sx={{
                  mt: 3,
                  p: 2.5,
                  bgcolor: 'rgba(0, 0, 0, 0.02)',
                  borderRadius: '8px',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{
                    mb: 1,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <InfoOutlinedIcon sx={{ fontSize: '1rem' }} />
                  Explanation:
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.primary',
                    lineHeight: 1.6,
                  }}
                >
                  {playerAnswers[index]?.explanation || "No explanation available."}
                </Typography>
              </Box>
            </CardContent>

            {/* Enhanced Footer */}
            <Box
              sx={{
                p: 2,
                bgcolor: playerAnswers[index]?.isCorrect ? 'success.light' : 'primary.main',
                color: 'white',
                borderBottomLeftRadius: '11px',
                borderBottomRightRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 2,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {playerAnswers[index]?.isCorrect ? (
                  <>
                    <EmojiEventsIcon sx={{ fontSize: '1.2rem' }} />
                    <Typography variant="body2">
                      Great job! You've mastered this concept!
                    </Typography>
                  </>
                ) : (
                  <>
                    <LightbulbIcon sx={{ fontSize: '1.2rem' }} />
                    <Typography variant="body2">
                      Pro Tip: Practice similar questions to improve!
                    </Typography>
                  </>
                )}
              </Box>
              <Button
                variant="contained"
                size="small"
                onClick={playerAnswers[index]?.isCorrect ? handleSimilarQuestions : handlePracticeMore}
                sx={{
                  bgcolor: 'white',
                  color: playerAnswers[index]?.isCorrect ? 'success.main' : 'primary.main',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.9)',
                  }
                }}
              >
                {playerAnswers[index]?.isCorrect ? 'Similar Questions' : 'Practice More'}
              </Button>
            </Box>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default GameOverScreen;

// Add these helper components:
const StatsCard = ({ icon, title, value }: StatsCardProps) => (
  <Box sx={{
    bgcolor: 'rgba(255,255,255,0.9)',
    p: 2,
    borderRadius: '12px',
    minWidth: '140px',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  }}>
    <Box sx={{ color: 'primary.main', mb: 1 }}>
      {icon}
    </Box>
    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
      {title}
    </Typography>
    <Typography variant="h6" color="text.primary" sx={{ fontWeight: 600 }}>
      {value}
    </Typography>
  </Box>
);

// Add this helper function:
const getScoreMessage = (score: number, total: number) => {
  const percentage = (score / total) * 100;
  if (percentage === 100) return "Perfect! You're a trivia master! 🏆";
  if (percentage >= 80) return "Excellent work! Almost perfect! 🌟";
  if (percentage >= 60) return "Good job! Keep practicing! 👍";
  return "Nice try! Room for improvement! 💪";
};