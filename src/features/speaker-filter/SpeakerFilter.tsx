import { Box, Chip, useTheme } from '@mui/material';
import { speakerTopics } from '@/entities/speaker';

interface SpeakerFilterProps {
  selectedTopic: string;
  onTopicChange: (topic: string) => void;
}

export const SpeakerFilter = ({ selectedTopic, onTopicChange }: SpeakerFilterProps) => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', gap: 1, mb: 4, flexWrap: 'wrap' }}>
      {speakerTopics.map((topic) => (
        <Chip
          key={topic}
          label={topic}
          onClick={() => onTopicChange(topic)}
          color={selectedTopic === topic ? 'primary' : 'default'}
          variant={selectedTopic === topic ? 'filled' : 'outlined'}
          sx={{
            fontWeight: selectedTopic === topic ? 600 : 400,
            '&:hover': { bgcolor: selectedTopic === topic ? undefined : `${theme.palette.primary.main}10` },
          }}
        />
      ))}
    </Box>
  );
};
