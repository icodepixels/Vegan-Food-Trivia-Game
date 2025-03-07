import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  CircularProgress,
  Grid,
  Card,
  CardContent,
  Alert,
  IconButton,
  Container,
  Button,
  Chip,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { fetchQuestionSets, startGame } from '../store/gameSlice';
import Game from './Game';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import TimerIcon from '@mui/icons-material/Timer';
import QuizIcon from '@mui/icons-material/Quiz';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const QuestionSetsScreen = () => {
  const { categoryName, quizName } = useParams<{ categoryName: string; quizName: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const {
    questionSets,
    loading,
    error,
    gameId,
  } = useSelector((state: RootState) => state.game);

  useEffect(() => {
    if (categoryName) {
      const originalCategoryName = categoryName
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      dispatch(fetchQuestionSets(originalCategoryName));
    }
  }, [categoryName, dispatch]);

  // If quiz name is in URL, start that quiz
  useEffect(() => {
    if (quizName && questionSets.length > 0 && !gameId) {
      const originalQuizName = quizName
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      const quiz = questionSets.find(set => set.name === originalQuizName);
      if (quiz) {
        handleQuestionSetSelect(quiz.id, quiz.name);
      }
    }
  }, [quizName, questionSets]);

  const handleQuestionSetSelect = async (questionSetId: number, quizName: string) => {
    try {
      const formattedQuizName = quizName
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');

      // Navigate to the quiz URL
      navigate(`/category/${categoryName}/${formattedQuizName}`);

      await dispatch(startGame(questionSetId)).unwrap();
    } catch (error) {
      console.error('Failed to start game:', error);
    }
  };

  const handleBack = () => {
    if (quizName) {
      // If in a game, go back to category view
      navigate(`/category/${categoryName}`);
    } else {
      // If in category view, go back to home
      navigate('/');
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return '#4caf50';
      case 'medium':
        return '#ff9800';
      case 'hard':
        return '#f44336';
      default:
        return '#2196f3';
    }
  };

  const formatDisplayName = (name: string) => {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Show loading state
  if (loading && !questionSets.length) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  // If we have a gameId, show the game component
  if (gameId && quizName) {
    return <Game />;
  }

  // Show question sets selection
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, px: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <IconButton
            onClick={handleBack}
            sx={{ mr: 2 }}
            aria-label="back"
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h4">
            {categoryName && formatDisplayName(categoryName)}
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Grid container spacing={2}>
          {questionSets.map((set) => (
            <Grid item xs={12} sm={6} md={4} key={set.id}>
              <Card sx={{
                height: '100%',
                borderRadius: '16px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease-in-out',
                position: 'relative',
                overflow: 'visible',
                background: 'linear-gradient(135deg, #ffffff 0%, #f8faf2 100%)',
                border: '1px solid rgba(0,0,0,0.05)',
                '&:hover': {
                  transform: 'translateY(-4px) scale(1.02)',
                  boxShadow: '0 12px 28px rgba(0, 0, 0, 0.15)',
                }
              }}>
                <Box sx={{ position: 'relative', height: '100%' }}>
                  {/* New: Popular Badge */}
                  {Math.random() > 0.5 && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -12,
                        left: 16,
                        zIndex: 1,
                        bgcolor: 'secondary.main',
                        color: 'white',
                        py: 0.5,
                        px: 2,
                        borderRadius: '12px',
                        fontSize: '0.85rem',
                        fontWeight: 'bold',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                        animation: 'pulse 2s infinite',
                        '@keyframes pulse': {
                          '0%': { transform: 'scale(1)' },
                          '50%': { transform: 'scale(1.05)' },
                          '100%': { transform: 'scale(1)' },
                        },
                      }}
                    >
                      🔥 Popular
                    </Box>
                  )}

                  {/* Difficulty Badge */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -12,
                      right: 16,
                      zIndex: 1,
                      bgcolor: getDifficultyColor(set.difficulty),
                      color: 'white',
                      py: 0.5,
                      px: 2,
                      borderRadius: '12px',
                      fontSize: '0.85rem',
                      fontWeight: 'bold',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    }}
                  >
                    {set.difficulty}
                  </Box>

                  <CardContent sx={{ p: 3 }}>
                    {/* Quiz Title with Category Icon */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box
                        sx={{
                          mr: 2,
                          p: 1,
                          borderRadius: '12px',
                          bgcolor: 'primary.light',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <QuizIcon />
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: 'primary.dark',
                          fontSize: '1.2rem',
                          lineHeight: 1.3,
                        }}
                      >
                        {set.name}
                      </Typography>
                    </Box>

                    {/* Enhanced Stats Row */}
                    <Grid container spacing={2} sx={{ mb: 2 }}>
                      <Grid item xs={6}>
                        <Box sx={{
                          p: 1,
                          bgcolor: 'rgba(0,0,0,0.02)',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                          <QuizIcon sx={{ mr: 1, fontSize: '1rem', color: 'primary.main' }} />
                          <Typography variant="body2" fontWeight={500}>
                            {set.question_count} Questions
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box sx={{
                          p: 1,
                          bgcolor: 'rgba(0,0,0,0.02)',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                          <TimerIcon sx={{ mr: 1, fontSize: '1rem', color: 'primary.main' }} />
                          <Typography variant="body2" fontWeight={500}>
                            ~{Math.ceil(set.question_count * 1.5)}min
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>

                    {/* Description with Background */}
                    <Box sx={{
                      mb: 3,
                      p: 2,
                      bgcolor: 'rgba(0,0,0,0.02)',
                      borderRadius: '8px',
                      minHeight: '80px',
                    }}>
                      <Typography variant="body2" color="text.secondary">
                        {set.description}
                      </Typography>
                    </Box>

                    {/* Enhanced Action Area */}
                    <Box sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2,
                    }}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleQuestionSetSelect(set.id, set.name)}
                        startIcon={<PlayArrowIcon />}
                        fullWidth
                        sx={{
                          borderRadius: '8px',
                          textTransform: 'none',
                          fontWeight: 600,
                          py: 1.5,
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                          background: 'linear-gradient(45deg, primary.main, primary.light)',
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
                          },
                        }}
                      >
                        Start Quiz Now
                      </Button>

                      {/* Stats Footer */}
                      <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        px: 1,
                      }}>
                        <Chip
                          icon={<TrendingUpIcon />}
                          label={`${Math.floor(Math.random() * 50 + 50)}% Success`}
                          size="small"
                          sx={{
                            bgcolor: 'rgba(76, 175, 80, 0.1)',
                            color: 'success.main',
                            '& .MuiChip-icon': {
                              color: 'success.main',
                            }
                          }}
                        />
                        <Typography variant="caption" color="text.secondary">
                          {Math.floor(Math.random() * 1000 + 100)} attempts
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default QuestionSetsScreen;