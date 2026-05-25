import { Box, Chip, useTheme } from '@mui/material';
import { literatureTags } from '@/entities/literature';

interface LiteratureFilterProps {
  selectedTag: string;
  onTagChange: (tag: string) => void;
}

export const LiteratureFilter = ({ selectedTag, onTagChange }: LiteratureFilterProps) => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', gap: 1, mb: 4, flexWrap: 'wrap' }}>
      {literatureTags.map((tag) => (
        <Chip
          key={tag}
          label={tag}
          onClick={() => onTagChange(tag)}
          color={selectedTag === tag ? 'primary' : 'default'}
          variant={selectedTag === tag ? 'filled' : 'outlined'}
          sx={{
            fontWeight: selectedTag === tag ? 600 : 400,
            '&:hover': { bgcolor: selectedTag === tag ? undefined : `${theme.palette.primary.main}10` },
          }}
        />
      ))}
    </Box>
  );
};
