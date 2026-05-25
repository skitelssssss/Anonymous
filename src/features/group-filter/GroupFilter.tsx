import { useState, useMemo } from 'react';
import {
  Box, TextField, InputAdornment, FormControl, InputLabel, Select,
  MenuItem, Button, Typography, useTheme, useMediaQuery,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import ResetFiltersIcon from '@mui/icons-material/Refresh';
import { Meeting, meetings, daysOfWeek, allTopics } from '@/entities/meeting';

interface GroupFilterProps {
  onFilterChange: (filtered: Meeting[]) => void;
}

export const GroupFilter = ({ onFilterChange }: GroupFilterProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');

  const filteredMeetings = useMemo(() => {
    const result = meetings.filter((meeting) => {
      const matchesSearch = searchQuery === '' ||
        meeting.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        meeting.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDay = selectedDay === '' || meeting.dayOfWeek === selectedDay;
      const matchesType = selectedType === '' || meeting.type === selectedType;
      const matchesTopic = selectedTopic === '' || meeting.topics.includes(selectedTopic);
      return matchesSearch && matchesDay && matchesType && matchesTopic;
    });
    onFilterChange(result);
    return result;
  }, [searchQuery, selectedDay, selectedType, selectedTopic, onFilterChange]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedDay('');
    setSelectedType('');
    setSelectedTopic('');
  };

  const hasActiveFilters = searchQuery || selectedDay || selectedType || selectedTopic;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: 2,
        mb: 4,
        p: 3,
        borderRadius: 3,
        bgcolor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.divider}`,
        alignItems: isMobile ? 'stretch' : 'flex-end',
        flexWrap: 'wrap',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mr: 1 }}>
        <FilterListIcon sx={{ color: theme.palette.primary.main }} />
        <Typography variant="h6" sx={{ fontWeight: 600 }}>Фильтры</Typography>
      </Box>

      <TextField
        placeholder="Поиск групп..."
        size="small"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ fontSize: '1.1rem', color: theme.palette.text.secondary }} />
              </InputAdornment>
            ),
          },
        }}
        sx={{ minWidth: 200, flex: isMobile ? 1 : undefined }}
      />

      <FormControl size="small" sx={{ minWidth: 160 }}>
        <InputLabel>День недели</InputLabel>
        <Select
          value={selectedDay}
          label="День недели"
          onChange={(e) => setSelectedDay(e.target.value)}
        >
          <MenuItem value="">Все дни</MenuItem>
          {daysOfWeek.map((day) => (
            <MenuItem key={day} value={day}>{day}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl size="small" sx={{ minWidth: 140 }}>
        <InputLabel>Формат</InputLabel>
        <Select
          value={selectedType}
          label="Формат"
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <MenuItem value="">Все</MenuItem>
          <MenuItem value="online">🌐 Онлайн</MenuItem>
          <MenuItem value="offline">📍 Офлайн</MenuItem>
        </Select>
      </FormControl>

      <FormControl size="small" sx={{ minWidth: 160 }}>
        <InputLabel>Тема</InputLabel>
        <Select
          value={selectedTopic}
          label="Тема"
          onChange={(e) => setSelectedTopic(e.target.value)}
        >
          <MenuItem value="">Все темы</MenuItem>
          {allTopics.map((topic) => (
            <MenuItem key={topic} value={topic}>{topic}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {hasActiveFilters && (
        <Button
          size="small"
          startIcon={<ResetFiltersIcon />}
          onClick={handleResetFilters}
          sx={{ color: theme.palette.text.secondary }}
        >
          Сбросить
        </Button>
      )}
    </Box>
  );
};
