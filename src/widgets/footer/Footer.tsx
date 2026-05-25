import { Box, Container, Grid, Typography, IconButton, Link, Divider, useTheme } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LanguageIcon from '@mui/icons-material/Language';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Link as RouterLink } from 'react-router-dom';

export const Footer = () => {
  const theme = useTheme();
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.mode === 'light'
          ? 'rgba(92, 107, 192, 0.04)'
          : 'rgba(121, 134, 203, 0.08)',
        borderTop: `1px solid ${theme.palette.divider}`,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: '12px',
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.3rem',
                  fontWeight: 700,
                }}
              >
                ДА
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
                  Анонимные Депрессивные
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                  Сообщество поддержки и взаимопомощи
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="body2"
              sx={{ color: theme.palette.text.secondary, maxWidth: 320, lineHeight: 1.8, mb: 2 }}
            >
              Мы — сообщество людей, которые делятся опытом, силой и надеждой,
              чтобы решать общие проблемы и помогать другим выздоравливать от депрессии.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                href="https://t.me/da_online"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                sx={{
                  color: theme.palette.text.secondary,
                  bgcolor: `${theme.palette.primary.main}10`,
                  '&:hover': { color: theme.palette.primary.main, bgcolor: `${theme.palette.primary.main}20` },
                }}
              >
                <TelegramIcon />
              </IconButton>
              <IconButton
                href="#"
                aria-label="WhatsApp"
                sx={{
                  color: theme.palette.text.secondary,
                  bgcolor: `${theme.palette.primary.main}10`,
                  '&:hover': { color: theme.palette.primary.main, bgcolor: `${theme.palette.primary.main}20` },
                }}
              >
                <WhatsAppIcon />
              </IconButton>
              <IconButton
                href="#"
                aria-label="GemSpace"
                sx={{
                  color: theme.palette.text.secondary,
                  bgcolor: `${theme.palette.primary.main}10`,
                  '&:hover': { color: theme.palette.primary.main, bgcolor: `${theme.palette.primary.main}20` },
                }}
              >
                <LanguageIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid size={{ xs: 6, sm: 3, md: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, fontSize: '0.95rem', color: theme.palette.text.primary }}>
              Навигация
            </Typography>
            {[
              { label: 'Главная', path: '/' },
              { label: 'Группы', path: '/groups' },
              { label: 'Спикерские', path: '/speakers' },
              { label: 'Литература', path: '/literature' },
              { label: 'Контакты', path: '/contacts' },
            ].map((item) => (
              <Link
                key={item.path}
                component={RouterLink}
                to={item.path}
                underline="none"
                sx={{
                  display: 'block',
                  py: 0.5,
                  color: theme.palette.text.secondary,
                  fontSize: '0.875rem',
                  transition: 'color 0.2s',
                  '&:hover': { color: theme.palette.primary.main },
                }}
              >
                {item.label}
              </Link>
            ))}
          </Grid>

          <Grid size={{ xs: 6, sm: 3, md: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, fontSize: '0.95rem', color: theme.palette.text.primary }}>
              Ресурсы
            </Typography>
            {['Программа 12 шагов', 'Традиции АД', 'Для новичков', 'FAQ', 'Блог'].map((item) => (
              <Link
                key={item}
                href="#"
                underline="none"
                sx={{
                  display: 'block',
                  py: 0.5,
                  color: theme.palette.text.secondary,
                  fontSize: '0.875rem',
                  transition: 'color 0.2s',
                  '&:hover': { color: theme.palette.primary.main },
                }}
              >
                {item}
              </Link>
            ))}
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, fontSize: '0.95rem', color: theme.palette.text.primary }}>
              Контакты
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon sx={{ fontSize: '1.1rem', color: theme.palette.primary.main }} />
                <Link href="tel:+74951234567" underline="none" sx={{ color: theme.palette.text.secondary, fontSize: '0.875rem' }}>
                  +7 (495) 123-45-67
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon sx={{ fontSize: '1.1rem', color: theme.palette.primary.main }} />
                <Link href="mailto:info@da-online.ru" underline="none" sx={{ color: theme.palette.text.secondary, fontSize: '0.875rem' }}>
                  info@da-online.ru
                </Link>
              </Box>
            </Box>

            <Box
              sx={{
                mt: 2,
                p: 2,
                borderRadius: 3,
                bgcolor: theme.palette.mode === 'light' ? 'rgba(129, 199, 132, 0.1)' : 'rgba(129, 199, 132, 0.08)',
                border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(129, 199, 132, 0.3)' : 'rgba(129, 199, 132, 0.15)'}`,
              }}
            >
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary, display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <FavoriteIcon sx={{ fontSize: '0.9rem', color: theme.palette.secondary.main }} />
                Если вам нужна срочная помощь, позвоните
              </Typography>
              <Link href="tel:88002000126" underline="none" sx={{ color: theme.palette.secondary.main, fontWeight: 600, fontSize: '0.95rem', mt: 0.5, display: 'block' }}>
                8-800-2000-126 (бесплатно)
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
            © {year} Анонимные Депрессивные. Все права защищены.
          </Typography>
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary, display: 'flex', alignItems: 'center', gap: 0.5 }}>
            Сделано с <FavoriteIcon sx={{ fontSize: '0.85rem', color: '#E57373' }} /> для сообщества
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
