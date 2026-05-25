import { Card, CardContent, Typography, Box, Chip, Button, useTheme } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { LiteratureItem } from './model';

interface LiteratureCardProps {
  book: LiteratureItem;
}

export const LiteratureCard = ({ book }: LiteratureCardProps) => {
  const theme = useTheme();

  return (
    <Card
      elevation={0}
      sx={{
        height: '100%',
        bgcolor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.divider}`,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          height: 200,
          bgcolor: book.coverColor,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '-50%',
            right: '-50%',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '-30%',
            left: '-30%',
            width: '80%',
            height: '80%',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)',
          }}
        />
        <MenuBookIcon sx={{ fontSize: '3rem', color: 'rgba(255,255,255,0.9)', mb: 1 }} />
        <Typography
          variant="h6"
          sx={{
            color: 'white',
            fontWeight: 700,
            textAlign: 'center',
            px: 2,
            fontSize: '0.95rem',
            lineHeight: 1.3,
            position: 'relative',
            zIndex: 1,
          }}
        >
          {book.title}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: 'rgba(255,255,255,0.7)',
            mt: 0.5,
            position: 'relative',
            zIndex: 1,
          }}
        >
          {book.year}
        </Typography>
      </Box>

      <CardContent sx={{ p: 2.5, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5, fontSize: '1rem' }}>
          {book.title}
        </Typography>
        <Typography variant="body2" sx={{ color: theme.palette.primary.main, mb: 1.5, fontWeight: 500 }}>
          {book.author}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: theme.palette.text.secondary, mb: 2, lineHeight: 1.7, flex: 1 }}
        >
          {book.description}
        </Typography>

        <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', mb: 2 }}>
          {book.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              variant="outlined"
              sx={{ fontSize: '0.7rem' }}
            />
          ))}
        </Box>

        <Button
          variant="outlined"
          size="small"
          fullWidth
          href={book.link}
          target="_blank"
          rel="noopener noreferrer"
          endIcon={<OpenInNewIcon sx={{ fontSize: '0.85rem' }} />}
          sx={{ mt: 'auto' }}
        >
          Подробнее
        </Button>
      </CardContent>
    </Card>
  );
};
