import { Box, CircularProgress, useTheme } from '@mui/material';

export const PageLoader = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '60vh',
      }}
    >
      <CircularProgress sx={{ color: theme.palette.primary.main }} />
    </Box>
  );
};
