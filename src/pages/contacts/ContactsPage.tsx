import { Box, Container, Typography, Grid, Card, CardContent, useTheme } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { contacts, ContactCard } from '@/entities/contact';
import { ContactForm } from '@/features/contact-form/ContactForm';
import { Button } from '@mui/material';
import { Snackbar, Alert } from '@mui/material';

const cities = [
  { name: 'Москва', address: 'ул. Тверская, д. 15, офис 201', color: '#5C6BC0' },
  { name: 'Санкт-Петербург', address: 'Невский пр., д. 42', color: '#81C784' },
  { name: 'Екатеринбург', address: 'ул. Ленина, д. 50', color: '#FFB74D' },
  { name: 'Новосибирск', address: 'Красный пр., д. 65', color: '#E57373' },
];

const ContactsPage = () => {
  const theme = useTheme();

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          background: theme.palette.mode === 'light'
            ? 'linear-gradient(135deg, rgba(92,107,192,0.06), rgba(129,199,132,0.06))'
            : 'linear-gradient(135deg, rgba(92,107,192,0.08), rgba(129,199,132,0.04))',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ mb: 2 }}>
            Контакты
          </Typography>
          <Typography variant="subtitle1" sx={{ color: theme.palette.text.secondary, maxWidth: 600 }}>
            Свяжитесь с нами — мы всегда готовы помочь.
            Выберите подходящий отдел или напишите нам через форму.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Typography variant="h3" sx={{ mb: 3 }}>
          Отделы
        </Typography>
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {contacts.map((contact) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={contact.id}>
              <ContactCard contact={contact} />
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Card
              elevation={0}
              sx={{
                bgcolor: theme.palette.background.paper,
                border: `1px solid ${theme.palette.divider}`,
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Typography variant="h3" sx={{ mb: 1 }}>
                  Напишите нам
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 3 }}>
                  Заполните форму и мы свяжемся с вами в течение 24 часов.
                </Typography>
                <ContactForm />
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Офлайн-группы
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {cities.map((city) => (
                <Card
                  key={city.name}
                  elevation={0}
                  sx={{
                    bgcolor: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.divider}`,
                  }}
                >
                  <CardContent sx={{ p: 2.5, display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '12px',
                        bgcolor: `${city.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: city.color,
                        flexShrink: 0,
                      }}
                    >
                      <LocationOnIcon />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.25 }}>
                        {city.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                        {city.address}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>

            <Box
              sx={{
                mt: 3,
                p: 3,
                borderRadius: 3,
                bgcolor: theme.palette.mode === 'light'
                  ? 'rgba(229, 115, 115, 0.08)'
                  : 'rgba(229, 115, 115, 0.06)',
                border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(229, 115, 115, 0.2)' : 'rgba(229, 115, 115, 0.1)'}`,
              }}
            >
              <Typography variant="h6" sx={{ mb: 1, color: theme.palette.mode === 'light' ? '#C62828' : '#EF9A9A' }}>
                Нужна срочная помощь?
              </Typography>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 2 }}>
                Если вы в кризисной ситуации, позвоните по бесплатному номеру:
              </Typography>
              <Button
                variant="contained"
                color="error"
                href="tel:88002000126"
                startIcon={<PhoneIcon />}
                fullWidth
              >
                8-800-2000-126 (бесплатно)
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactsPage;
