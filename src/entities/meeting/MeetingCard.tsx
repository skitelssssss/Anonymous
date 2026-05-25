import { Card, CardContent, Typography, Box, Chip, Button, useTheme } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Meeting } from './model';

function getPlatformIcon(platform: string) {
  switch (platform.toLowerCase()) {
    case 'telegram': return <TelegramIcon sx={{ fontSize: '1.1rem' }} />;
    case 'whatsapp': return <WhatsAppIcon sx={{ fontSize: '1.1rem' }} />;
    default: return <LanguageIcon sx={{ fontSize: '1.1rem' }} />;
  }
}

interface MeetingCardProps {
  meeting: Meeting;
  variant?: 'full' | 'compact';
}

export const MeetingCard = ({ meeting, variant = 'full' }: MeetingCardProps) => {
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
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Chip
            label={meeting.type === 'online' ? '🌐 Онлайн' : '📍 Офлайн'}
            size="small"
            sx={{
              bgcolor: meeting.type === 'online'
                ? `${theme.palette.primary.main}12`
                : `${theme.palette.secondary.main}12`,
              color: meeting.type === 'online'
                ? theme.palette.primary.main
                : theme.palette.secondary.dark,
              fontWeight: 500,
            }}
          />
          {meeting.isBeginnerFriendly && (
            <Chip
              label={variant === 'full' ? '✨ Для новичков' : 'Новичкам'}
              size="small"
              color="secondary"
              variant="outlined"
              sx={{ fontSize: '0.75rem' }}
            />
          )}
        </Box>

        <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
          {meeting.title}
        </Typography>

        {variant === 'full' && (
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 2, lineHeight: 1.7, flex: 1 }}>
            {meeting.description}
          </Typography>
        )}

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75, mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CalendarTodayIcon sx={{ fontSize: '0.9rem', color: theme.palette.primary.main }} />
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              {meeting.dayOfWeek}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <AccessTimeIcon sx={{ fontSize: '0.9rem', color: theme.palette.primary.main }} />
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              {meeting.time} ({meeting.timezone})
            </Typography>
          </Box>
          {meeting.type === 'offline' && meeting.location && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocationOnIcon sx={{ fontSize: '0.9rem', color: theme.palette.primary.main }} />
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                {meeting.location}
              </Typography>
            </Box>
          )}
        </Box>

        <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', mb: 2 }}>
          {meeting.topics.map((topic) => (
            <Chip
              key={topic}
              label={topic}
              size="small"
              variant="outlined"
              sx={{ fontSize: '0.75rem' }}
            />
          ))}
        </Box>

        {variant === 'full' && (
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {meeting.chatLinks.map((link) => (
              <Button
                key={link.platform}
                size="small"
                variant="outlined"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={getPlatformIcon(link.platform)}
                sx={{ fontSize: '0.8rem', textTransform: 'none' }}
              >
                {link.platform}
              </Button>
            ))}
          </Box>
        )}
      </CardContent>
    </Card>
  );
};
