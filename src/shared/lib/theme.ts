import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode: 'light' | 'dark') => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#5C6BC0',
            light: '#8E99D6',
            dark: '#3F51B5',
            contrastText: '#FFFFFF',
          },
          secondary: {
            main: '#81C784',
            light: '#A5D6A7',
            dark: '#66BB6A',
            contrastText: '#1B5E20',
          },
          background: {
            default: '#F8F9FA',
            paper: '#FFFFFF',
          },
          text: {
            primary: '#2E3A4A',
            secondary: '#5C6B7A',
          },
          divider: 'rgba(0,0,0,0.08)',
        }
      : {
          primary: {
            main: '#7986CB',
            light: '#9FA8DA',
            dark: '#5C6BC0',
            contrastText: '#FFFFFF',
          },
          secondary: {
            main: '#A5D6A7',
            light: '#C8E6C9',
            dark: '#81C784',
            contrastText: '#1B5E20',
          },
          background: {
            default: '#0D1117',
            paper: '#161B22',
          },
          text: {
            primary: '#E6EDF3',
            secondary: '#8B949E',
          },
          divider: 'rgba(255,255,255,0.08)',
        }),
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: 'clamp(2rem, 5vw, 3rem)',
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
      fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 600,
      fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: '1.125rem',
      lineHeight: 1.6,
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      fontSize: '0.9375rem',
    },
  },
  shape: {
    borderRadius: 12,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollBehavior: 'smooth',
        },
        '*': {
          scrollbarWidth: 'thin',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 24px',
          fontSize: '0.9375rem',
          transition: 'all 0.2s ease-in-out',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(92,107,192,0.3)',
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: mode === 'light'
            ? '0 4px 20px rgba(0,0,0,0.06)'
            : '0 4px 20px rgba(0,0,0,0.3)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: mode === 'light'
              ? '0 12px 32px rgba(0,0,0,0.12)'
              : '0 12px 32px rgba(0,0,0,0.5)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: mode === 'light'
            ? '0 1px 12px rgba(0,0,0,0.06)'
            : '0 1px 12px rgba(0,0,0,0.3)',
        },
      },
    },
  },
});

export const createAppTheme = (mode: 'light' | 'dark') => createTheme(getDesignTokens(mode));
