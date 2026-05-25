import { useState, useMemo } from 'react';
import { Box, Container, Typography, Grid, Button, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { speakers, SpeakerCard } from '@/entities/speaker';
import { SpeakerFilter } from '@/features/speaker-filter/SpeakerFilter';

const SpeakersPage = () => {
  const theme = useTheme();
  const [selectedTopic, setSelectedTopic] = useState('Все темы');
  const [playingId, setPlayingId] = useState<string | null>(null);

  const filteredSpeakers = useMemo(() => {
    if (selectedTopic === 'Все темы') return speakers;
    return speakers.filter((s) => s.topic === selectedTopic);
  }, [selectedTopic]);

  const handlePlay = (id: string) => {
    setPlayingId(playingId === id ? null : id);
  };

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          background: theme.palette.mode === 'light'
            ? 'linear-gradient(135deg, rgba(129,199,132,0.06), rgba(92,107,192,0.06))'
            : 'linear-gradient(135deg, rgba(129,199,132,0.04), rgba(92,107,192,0.08))',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ mb: 2 }}>
            Спикерские истории
          </Typography>
          <Typography variant="subtitle1" sx={{ color: theme.palette.text.secondary, maxWidth: 600 }}>
            Участники сообщества делятся своими историями выздоровления.
            Каждая история — это луч надежды для тех, кто ещё ищет свой путь.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <SpeakerFilter selectedTopic={selectedTopic} onTopicChange={setSelectedTopic} />

        <Grid container spacing={3}>
          {filteredSpeakers.map((speaker) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={speaker.id}>
              <SpeakerCard
                speaker={speaker}
                isPlaying={playingId === speaker.id}
                onPlayToggle={handlePlay}
              />
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            mt: 6,
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            bgcolor: theme.palette.mode === 'light'
              ? 'rgba(92, 107, 192, 0.06)'
              : 'rgba(92, 107, 192, 0.08)',
            border: `1px solid ${theme.palette.divider}`,
            textAlign: 'center',
          }}
        >
          <Typography variant="h3" sx={{ mb: 1.5 }}>
            Поделитесь своей историей
          </Typography>
          <Typography variant="body1" sx={{ color: theme.palette.text.secondary, mb: 3, maxWidth: 500, mx: 'auto' }}>
            Ваша история может помочь кому-то сделать первый шаг к выздоровлению.
            Мы гарантируем полную анонимность.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            endIcon={<ArrowForwardIcon />}
          >
            Предложить историю
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default SpeakersPage;
