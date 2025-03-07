import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { store } from './store/store';
import WelcomeScreen from './components/WelcomeScreen';
import QuestionSetsScreen from './components/QuestionSetsScreen';
import LoadingScreen from './components/LoadingScreen';
import { Box } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f6c51',      // Forest green
      light: '#558b6e',     // Lighter forest green
      dark: '#2c4d3a',      // Darker forest green
    },
    secondary: {
      main: '#8c3f3f',      // Terracotta
      light: '#aa4f4f',     // Lighter terracotta
      dark: '#6e2f2f',      // Darker terracotta
    },
    background: {
      default: '#aeba55',   // Your specified sage green background #6d9d6a
      paper: '#f8faf2',     // Light leaf color for cards
    },
    text: {
      primary: '#283618',   // Dark olive for primary text
      secondary: '#4a5239', // Muted olive for secondary text
    },
    error: {
      main: '#bc6c25',      // Warm brown instead of traditional red
    },
    success: {
      main: '#386641',      // Natural green for success states
    },
  },
  typography: {
    fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      fontSize: '3.5rem',
      letterSpacing: '0.7px',
      color: 'white',
      textShadow: '2px 2px 4px rgba(0,0,0,0.15)',
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '2.8rem',
      letterSpacing: '0.5px',
      color: 'text.primary',
      marginBottom: '0.5em',
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '2.2rem',
      letterSpacing: '0.3px',
      color: 'text.primary',
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      fontSize: '1.8rem',
      letterSpacing: '0.5px',
      textTransform: 'none',
      position: 'relative',
      color: 'text.primary',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-8px',
        left: '0',
        width: '40px',
        height: '3px',
        backgroundColor: 'primary.main',
        borderRadius: '2px',
      }
    },
    h5: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '1.5rem',
      letterSpacing: '0.2px',
      color: 'text.primary',
    },
    h6: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
      fontSize: '1.2rem',
      letterSpacing: '0.1px',
      color: 'text.secondary',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          padding: '12px 24px',
          textTransform: 'none',
          fontSize: '1.1rem',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.02)',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            minHeight: '100vh',
            background: 'linear-gradient(180deg, #aeba55 30%, #6d9d6a 100%)',
            paddingBottom: '32px',
          }}
        >
          <BrowserRouter>
            <Suspense fallback={<LoadingScreen />}>
              <Routes>
                <Route path="/" element={<WelcomeScreen />} />
                <Route path="/category/:categoryName" element={<QuestionSetsScreen />} />
                <Route path="/category/:categoryName/:quizName" element={<QuestionSetsScreen />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </Box>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
