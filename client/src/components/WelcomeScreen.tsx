import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  CircularProgress,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Alert,
  Chip,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { fetchCategories } from '../store/gameSlice';

const WelcomeScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { categories, loading, error } = useSelector((state: RootState) => state.game);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategorySelect = (categoryName: string) => {
    const formattedCategory = categoryName
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
    navigate(`/category/${formattedCategory}`);
  };

  if (loading && !categories.length) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 4, px: 3 }}>
      <Typography variant="h2" align="center">
        The Vegan Trivia Challenge!
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Grid container spacing={3} sx={{ mt: 4 }}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={4} key={category.name}>
            <Card
              sx={{
                height: '100%',
                borderRadius: '16px',
                boxShadow: '0 6px 15px rgba(104, 159, 56, 0.15)',
                transition: 'all 0.3s ease-in-out',
                background: 'linear-gradient(135deg, #f1f8e9 0%, #ffffff 100%)',
                border: '2px solid #a5d6a7',
                position: 'relative',
                overflow: 'visible',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: -10,
                  left: 20,
                  width: 20,
                  height: 20,
                  background: '#81c784',
                  borderRadius: '50%',
                  boxShadow: '30px 5px 0 #a5d6a7, 60px 0 0 #c8e6c9',
                },
                '&:hover': {
                  transform: 'translateY(-8px) rotate(1deg)',
                  boxShadow: '0 12px 24px rgba(104, 159, 56, 0.25)',
                  '&:before': {
                    transform: 'scale(1.1)',
                  }
                }
              }}
            >
              <CardActionArea
                onClick={() => handleCategorySelect(category.name)}
                sx={{
                  height: '100%',
                  p: 2,
                  pt: 4,
                }}
              >
                <CardContent sx={{ p: 2 }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      color: '#2e7d32',
                      fontWeight: 600,
                      mb: 2,
                      borderBottom: '2px solid',
                      borderColor: '#81c784',
                      pb: 1,
                      position: 'relative',
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        right: -4,
                        bottom: -2,
                        width: 10,
                        height: 10,
                        background: '#81c784',
                        borderRadius: '50%',
                      }
                    }}
                  >
                    {category.name}
                  </Typography>

                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2,
                    color: '#558b2f',
                    backgroundColor: 'rgba(129, 199, 132, 0.1)',
                    p: 1,
                    borderRadius: 2
                  }}>
                    <Typography variant="body2">
                      {category.set_count} Question Sets
                    </Typography>
                  </Box>

                  <Box sx={{
                    display: 'flex',
                    gap: 1,
                    flexWrap: 'wrap'
                  }}>
                    {category.difficulty_levels.map((level) => (
                      <Chip
                        key={level}
                        label={level}
                        size="small"
                        sx={{
                          bgcolor: (() => {
                            switch(level.toLowerCase()) {
                              case 'easy':
                                return 'success.light';
                              case 'easy-medium':
                                return '#7cb342';  // Light green
                              case 'medium':
                                return 'warning.light';
                              case 'medium-hard':
                                return '#f57c00';  // Dark orange
                              case 'hard':
                                return 'error.light';
                              default:
                                return 'grey.500';
                            }
                          })(),
                          color: '#fff',
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WelcomeScreen;