import { Box, Container, Typography, Button, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const NotFoundPage = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center', py: 8 }}>
        <Box
          sx={{
            fontSize: '8rem',
            fontWeight: 800,
            lineHeight: 1,
            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2,
          }}
        >
          404
        </Box>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Страница не найдена
        </Typography>
        <Typography variant="body1" sx={{ color: theme.palette.text.secondary, mb: 4, maxWidth: 400, mx: 'auto' }}>
          Возможно, эта страница была перемещена или больше не существует.
          Давайте вернёмся на главную и найдём то, что вам нужно.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={RouterLink}
            to="/"
            startIcon={<HomeIcon />}
          >
            На главную
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={() => window.history.back()}
            startIcon={<ArrowBackIcon />}
          >
            Назад
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFoundPage;
