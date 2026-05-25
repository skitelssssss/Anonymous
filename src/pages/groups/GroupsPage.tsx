import { useState, useCallback } from 'react';
import { Box, Container, Typography, Grid, Button, useTheme } from '@mui/material';
import ResetFiltersIcon from '@mui/icons-material/Refresh';
import { meetings, MeetingCard, type Meeting } from '@/entities/meeting';
import { GroupFilter } from '@/features/group-filter/GroupFilter';

const GroupsPage = () => {
  const theme = useTheme();
  const [filteredMeetings, setFilteredMeetings] = useState(meetings);

  const handleFilterChange = useCallback((result: Meeting[]) => {
    setFilteredMeetings(result);
  }, []);

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
            Группы поддержки
          </Typography>
          <Typography variant="subtitle1" sx={{ color: theme.palette.text.secondary, maxWidth: 600 }}>
            Найдите подходящую группу по теме, формату и расписанию.
            Все собрания бесплатны и анонимны.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <GroupFilter onFilterChange={handleFilterChange} />

        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 3 }}>
          Найдено групп: {filteredMeetings.length}
        </Typography>

        <Grid container spacing={3}>
          {filteredMeetings.map((meeting) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={meeting.id}>
              <MeetingCard meeting={meeting} />
            </Grid>
          ))}
        </Grid>

        {filteredMeetings.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h4" sx={{ mb: 2, color: theme.palette.text.secondary }}>
              Группы не найдены
            </Typography>
            <Typography variant="body1" sx={{ color: theme.palette.text.secondary, mb: 3 }}>
              Попробуйте изменить параметры фильтрации
            </Typography>
            <Button variant="outlined" startIcon={<ResetFiltersIcon />}>
              Сбросить фильтры
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default GroupsPage;
