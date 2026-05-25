import { Card, CardContent, Typography, Box, Chip, Avatar, Button, useTheme } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Speaker } from './model';

interface SpeakerCardProps {
  speaker: Speaker;
  isPlaying: boolean;
  onPlayToggle: (id: string) => void;
}

export const SpeakerCard = ({ speaker, isPlaying, onPlayToggle }: SpeakerCardProps) => {
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
      <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2.5 }}>
          <Avatar
            sx={{
              bgcolor: speaker.avatarColor,
              width: 52,
              height: 52,
              fontWeight: 700,
              fontSize: '1.1rem',
            }}
          >
            {speaker.initials}
          </Avatar>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.25 }}>
              {speaker.name}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <CalendarTodayIcon sx={{ fontSize: '0.8rem', color: theme.palette.text.secondary }} />
              <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                {speaker.date}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Typography variant="h5" sx={{ mb: 1.5, fontWeight: 600, fontSize: '1.15rem' }}>
          {speaker.title}
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: theme.palette.text.secondary, mb: 2.5, lineHeight: 1.7, flex: 1 }}
        >
          {speaker.description}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            p: 1.5,
            borderRadius: 2,
            bgcolor: theme.palette.mode === 'light'
              ? 'rgba(0,0,0,0.03)'
              : 'rgba(255,255,255,0.05)',
            mb: 2,
          }}
        >
          <Button
            variant="contained"
            size="small"
            onClick={() => onPlayToggle(speaker.id)}
            sx={{
              minWidth: 36,
              width: 36,
              height: 36,
              borderRadius: '50%',
              p: 0,
              bgcolor: speaker.avatarColor,
              '&:hover': { bgcolor: speaker.avatarColor, filter: 'brightness(1.1)' },
            }}
            aria-label={isPlaying ? 'Пауза' : 'Воспроизвести'}
          >
            {isPlaying ? <PauseIcon sx={{ fontSize: '1.1rem' }} /> : <PlayArrowIcon sx={{ fontSize: '1.1rem' }} />}
          </Button>
          <Box sx={{ flex: 1 }}>
            <Box
              sx={{
                height: 4,
                borderRadius: 2,
                bgcolor: theme.palette.mode === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.1)',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  height: '100%',
                  width: isPlaying ? '45%' : '0%',
                  borderRadius: 2,
                  bgcolor: speaker.avatarColor,
                  transition: 'width 0.3s ease',
                }}
              />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <AccessTimeIcon sx={{ fontSize: '0.85rem', color: theme.palette.text.secondary }} />
            <Typography variant="caption" sx={{ color: theme.palette.text.secondary, fontWeight: 500 }}>
              {speaker.duration}
            </Typography>
          </Box>
        </Box>

        <Chip label={speaker.topic} size="small" variant="outlined" />
      </CardContent>
    </Card>
  );
};
