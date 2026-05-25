import { useMemo, lazy, Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { createAppTheme } from '@/shared/lib/theme';
import { useThemeMode } from '@/features/theme-toggle/useThemeMode';
import { Header } from '@/widgets/header/Header';
import { Footer } from '@/widgets/footer/Footer';
import { PageLoader } from '@/widgets/page-loader/PageLoader';

const HomePage = lazy(() => import('@/pages/home/HomePage'));
const GroupsPage = lazy(() => import('@/pages/groups/GroupsPage'));
const SpeakersPage = lazy(() => import('@/pages/speakers/SpeakersPage'));
const LiteraturePage = lazy(() => import('@/pages/literature/LiteraturePage'));
const ContactsPage = lazy(() => import('@/pages/contacts/ContactsPage'));
const NotFoundPage = lazy(() => import('@/pages/not-found/NotFoundPage'));

function App() {
  const { mode, toggleTheme, isDark } = useThemeMode();
  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            bgcolor: theme.palette.background.default,
            color: theme.palette.text.primary,
            transition: 'background-color 0.3s ease, color 0.3s ease',
          }}
        >
          <Header onToggleTheme={toggleTheme} isDark={isDark} />
          <Box component="main" sx={{ flex: 1 }}>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/groups" element={<GroupsPage />} />
                <Route path="/speakers" element={<SpeakersPage />} />
                <Route path="/literature" element={<LiteraturePage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </Box>
          <Footer />
        </Box>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
