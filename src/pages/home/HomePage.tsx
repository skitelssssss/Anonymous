import { Box, Container, Typography, Button, Grid, Card, CardContent, Chip, Avatar, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShieldIcon from '@mui/icons-material/Shield';
import PeopleIcon from '@mui/icons-material/People';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { meetings, MeetingCard } from '@/entities/meeting';
import { speakers, SpeakerCard } from '@/entities/speaker';

const steps = [
  {
    icon: <SearchIcon sx={{ fontSize: 40 }} />,
    title: 'Найти группу',
    description: 'Выберите подходящую группу по теме, формату и расписанию. У нас есть онлайн и офлайн собрания.',
    color: '#5C6BC0',
  },
  {
    icon: <GroupAddIcon sx={{ fontSize: 40 }} />,
    title: 'Присоединиться',
    description: 'Перейдите в чат группы через Telegram, WhatsApp или GemSpace. Вас встретят с пониманием.',
    color: '#81C784',
  },
  {
    icon: <SelfImprovementIcon sx={{ fontSize: 40 }} />,
    title: 'Выздоравливать',
    description: 'Регулярно посещайте собрания, делитесь опытом и получайте поддержку на пути к выздоровлению.',
    color: '#FFB74D',
  },
];

const features = [
  {
    icon: <ShieldIcon sx={{ fontSize: 32 }} />,
    title: 'Анонимность',
    description: 'Ваша конфиденциальность — наш приоритет. Не нужно представляться настоящим именем.',
  },
  {
    icon: <PeopleIcon sx={{ fontSize: 32 }} />,
    title: 'Сообщество',
    description: 'Тысячи людей по всей России, которые понимают вашу ситуацию без осуждения.',
  },
  {
    icon: <VolunteerActivismIcon sx={{ fontSize: 32 }} />,
    title: 'Бесплатно',
    description: 'Все группы и собрания бесплатны. Мы работаем на принципах взаимопомощи.',
  },
  {
    icon: <FavoriteIcon sx={{ fontSize: 32 }} />,
    title: 'Эмпатия',
    description: 'Каждый участник прошёл через похожий опыт. Мы понимаем и поддерживаем.',
  },
];

const HomePage = () => {
  const theme = useTheme();
  const upcomingMeetings = meetings.slice(0, 3);
  const featuredSpeakers = speakers.slice(0, 3);

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: { xs: '85vh', md: '90vh' },
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: theme.palette.mode === 'light'
              ? 'linear-gradient(135deg, #5C6BC0 0%, #7E57C2 40%, #81C784 100%)'
              : 'linear-gradient(135deg, #1A237E 0%, #311B92 40%, #1B5E20 100%)',
            zIndex: 0,
          }}
        />
        <Box sx={{ position: 'absolute', top: '-20%', right: '-10%', width: '60vw', height: '60vw', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', zIndex: 0 }} />
        <Box sx={{ position: 'absolute', bottom: '-30%', left: '-15%', width: '70vw', height: '70vw', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', zIndex: 0 }} />
        <Box sx={{ position: 'absolute', top: '20%', right: '20%', width: '20vw', height: '20vw', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', zIndex: 0, animation: 'float 6s ease-in-out infinite' }} />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{ color: 'white' }}>
                <Chip
                  label="💚 Бесплатная поддержка 24/7"
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.15)',
                    color: 'white',
                    mb: 3,
                    backdropFilter: 'blur(10px)',
                    fontWeight: 500,
                    fontSize: '0.85rem',
                  }}
                />
                <Typography
                  variant="h1"
                  sx={{
                    color: 'white',
                    mb: 2,
                    fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.5rem' },
                    textShadow: '0 2px 20px rgba(0,0,0,0.15)',
                  }}
                >
                  Вы не одни.
                  <br />
                  <Box component="span" sx={{ opacity: 0.9 }}>Помощь рядом.</Box>
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: 'rgba(255,255,255,0.85)',
                    mb: 4,
                    maxWidth: 560,
                    lineHeight: 1.7,
                    fontWeight: 400,
                  }}
                >
                  Анонимные Депрессивные — сообщество людей, которые делятся опытом, силой и надеждой в борьбе с депрессией
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    size="large"
                    component={RouterLink}
                    to="/groups"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      bgcolor: 'white',
                      color: theme.palette.primary.main,
                      px: 4,
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 700,
                      '&:hover': {
                        bgcolor: 'rgba(255,255,255,0.92)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    Найти группу
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    component={RouterLink}
                    to="/speakers"
                    startIcon={<PlayArrowIcon />}
                    sx={{
                      borderColor: 'rgba(255,255,255,0.4)',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      fontSize: '1rem',
                      '&:hover': {
                        borderColor: 'white',
                        bgcolor: 'rgba(255,255,255,0.1)',
                      },
                    }}
                  >
                    Послушать истории
                  </Button>
                </Box>

                <Box sx={{ display: 'flex', gap: { xs: 3, sm: 5 }, mt: 6 }}>
                  {[
                    { value: '50+', label: 'Групп' },
                    { value: '5000+', label: 'Участников' },
                    { value: '7', label: 'Лет работы' },
                  ].map((stat) => (
                    <Box key={stat.label}>
                      <Typography variant="h3" sx={{ color: 'white', fontWeight: 800 }}>
                        {stat.value}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                        {stat.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box sx={{ perspective: '1000px' }}>
                <Box
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.12)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: 4,
                    p: 4,
                    border: '1px solid rgba(255,255,255,0.15)',
                    transform: 'rotateY(-5deg) rotateX(3deg)',
                    transition: 'transform 0.4s ease',
                    '&:hover': { transform: 'rotateY(0deg) rotateX(0deg)' },
                  }}
                >
                  <Typography variant="h4" sx={{ color: 'white', mb: 2, fontSize: '1.3rem' }}>
                    💬 «Здесь я впервые почувствовал, что меня понимают»
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', mb: 3 }}>
                    Истории выздоровления участников сообщества
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
                    {['Понимание', 'Поддержка', 'Безопасность', 'Анонимность'].map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          bgcolor: 'rgba(255,255,255,0.12)',
                          color: 'white',
                          border: '1px solid rgba(255,255,255,0.2)',
                        }}
                      />
                    ))}
                  </Box>
                  <Button
                    variant="text"
                    endIcon={<ArrowForwardIcon />}
                    sx={{ color: 'white' }}
                    component={RouterLink}
                    to="/speakers"
                  >
                    Все истории
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* How It Works */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
          <Chip
            label="Простой путь"
            sx={{ mb: 2, bgcolor: `${theme.palette.primary.main}12`, color: theme.palette.primary.main }}
          />
          <Typography variant="h2" sx={{ mb: 2 }}>
            Как это работает?
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: theme.palette.text.secondary, maxWidth: 600, mx: 'auto' }}
          >
            Три простых шага от одиночества к поддерживающему сообществу
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {steps.map((step, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={step.title}>
              <Box
                sx={{
                  textAlign: 'center',
                  p: { xs: 3, md: 4 },
                  borderRadius: 4,
                  bgcolor: theme.palette.background.paper,
                  border: `1px solid ${theme.palette.divider}`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 20px 40px ${step.color}20`,
                    borderColor: `${step.color}40`,
                  },
                  height: '100%',
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '20px',
                    bgcolor: `${step.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3,
                    color: step.color,
                  }}
                >
                  {step.icon}
                </Box>
                <Typography
                  variant="overline"
                  sx={{
                    display: 'block',
                    mb: 1,
                    color: step.color,
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    letterSpacing: 2,
                  }}
                >
                  Шаг {index + 1}
                </Typography>
                <Typography variant="h4" sx={{ mb: 2 }}>
                  {step.title}
                </Typography>
                <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                  {step.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Features */}
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          bgcolor: theme.palette.mode === 'light'
            ? 'rgba(92, 107, 192, 0.04)'
            : 'rgba(121, 134, 203, 0.06)',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Chip
                label="Наши ценности"
                sx={{ mb: 2, bgcolor: `${theme.palette.secondary.main}15`, color: theme.palette.secondary.dark }}
              />
              <Typography variant="h2" sx={{ mb: 2 }}>
                Безопасное пространство для исцеления
              </Typography>
              <Typography variant="body1" sx={{ color: theme.palette.text.secondary, mb: 4, lineHeight: 1.8 }}>
                Мы создаём среду, где каждый может быть честным и уязвимым,
                зная что его примут и поддержат. Наши принципы основаны на программе 12 шагов
                и традициях взаимопомощи.
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                component={RouterLink}
                to="/groups"
                endIcon={<ArrowForwardIcon />}
              >
                Узнать больше
              </Button>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Grid container spacing={3}>
                {features.map((feature) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={feature.title}>
                    <Card
                      elevation={0}
                      sx={{
                        p: 3,
                        height: '100%',
                        bgcolor: theme.palette.background.paper,
                        border: `1px solid ${theme.palette.divider}`,
                      }}
                    >
                      <Box sx={{ color: theme.palette.primary.main, mb: 2 }}>{feature.icon}</Box>
                      <Typography variant="h5" sx={{ mb: 1 }}>{feature.title}</Typography>
                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                        {feature.description}
                      </Typography>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Upcoming Meetings */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: { xs: 4, md: 6 }, flexWrap: 'wrap', gap: 2 }}>
          <Box>
            <Chip
              label="Ближайшие собрания"
              sx={{ mb: 2, bgcolor: `${theme.palette.primary.main}12`, color: theme.palette.primary.main }}
            />
            <Typography variant="h2">Расписание групп</Typography>
          </Box>
          <Button
            variant="outlined"
            color="primary"
            component={RouterLink}
            to="/groups"
            endIcon={<ArrowForwardIcon />}
          >
            Все группы
          </Button>
        </Box>

        <Grid container spacing={3}>
          {upcomingMeetings.map((meeting) => (
            <Grid size={{ xs: 12, md: 4 }} key={meeting.id}>
              <MeetingCard meeting={meeting} variant="compact" />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Speaker Stories Preview */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: theme.palette.mode === 'light'
            ? 'rgba(129, 199, 132, 0.06)'
            : 'rgba(129, 199, 132, 0.04)',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
            <Chip
              label="Истории надежды"
              sx={{ mb: 2, bgcolor: `${theme.palette.secondary.main}15`, color: theme.palette.secondary.dark }}
            />
            <Typography variant="h2" sx={{ mb: 2 }}>
              Голоса выздоровления
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: theme.palette.text.secondary, maxWidth: 600, mx: 'auto' }}
            >
              Участники сообщества делятся своими историями — честно, открыто, с надеждой
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {featuredSpeakers.map((speaker) => (
              <Grid size={{ xs: 12, md: 4 }} key={speaker.id}>
                <SpeakerCard speaker={speaker} isPlaying={false} onPlayToggle={() => {}} />
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              component={RouterLink}
              to="/speakers"
              endIcon={<ArrowForwardIcon />}
            >
              Все спикерские
            </Button>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="md" sx={{ py: { xs: 8, md: 12 }, textAlign: 'center' }}>
        <Box
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 4,
            background: theme.palette.mode === 'light'
              ? 'linear-gradient(135deg, #5C6BC0, #81C784)'
              : 'linear-gradient(135deg, #1A237E, #1B5E20)',
            color: 'white',
          }}
        >
          <Typography variant="h2" sx={{ color: 'white', mb: 2, fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
            Готовы сделать первый шаг?
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'rgba(255,255,255,0.85)', mb: 4, maxWidth: 500, mx: 'auto' }}>
            Присоединяйтесь к нашему сообществу. Это бесплатно, анонимно и может изменить вашу жизнь.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              component={RouterLink}
              to="/groups"
              sx={{
                bgcolor: 'white',
                color: theme.palette.primary.main,
                px: 4,
                py: 1.5,
                fontWeight: 700,
                '&:hover': { bgcolor: 'rgba(255,255,255,0.92)' },
              }}
            >
              Найти группу
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={RouterLink}
              to="/contacts"
              sx={{
                borderColor: 'rgba(255,255,255,0.4)',
                color: 'white',
                px: 4,
                py: 1.5,
                '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' },
              }}
            >
              Задать вопрос
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
