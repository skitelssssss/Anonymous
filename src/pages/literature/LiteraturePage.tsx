import { useState, useMemo } from 'react';
import { Box, Container, Typography, Grid, useTheme } from '@mui/material';
import { literature, LiteratureCard } from '@/entities/literature';
import { LiteratureFilter } from '@/features/literature-filter/LiteratureFilter';

const LiteraturePage = () => {
  const theme = useTheme();
  const [selectedTag, setSelectedTag] = useState('Все');

  const filteredLiterature = useMemo(() => {
    if (selectedTag === 'Все') return literature;
    return literature.filter((item) => item.tags.includes(selectedTag));
  }, [selectedTag]);

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          background: theme.palette.mode === 'light'
            ? 'linear-gradient(135deg, rgba(255,183,77,0.06), rgba(92,107,192,0.06))'
            : 'linear-gradient(135deg, rgba(255,183,77,0.04), rgba(92,107,192,0.08))',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ mb: 2 }}>
            Литература
          </Typography>
          <Typography variant="subtitle1" sx={{ color: theme.palette.text.secondary, maxWidth: 600 }}>
            Подборка книг и материалов, которые помогут вам на пути к выздоровлению.
            От основного текста программы до современных исследований.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <LiteratureFilter selectedTag={selectedTag} onTagChange={setSelectedTag} />

        <Grid container spacing={3}>
          {filteredLiterature.map((book) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={book.id}>
              <LiteratureCard book={book} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default LiteraturePage;
