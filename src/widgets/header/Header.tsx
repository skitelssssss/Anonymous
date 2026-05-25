import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Container,
  useScrollTrigger,
  Slide,
  useTheme,
  Divider,
  Chip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import MicIcon from '@mui/icons-material/Mic';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ContactMailIcon from '@mui/icons-material/ContactMail';

interface HeaderProps {
  onToggleTheme: () => void;
  isDark: boolean;
}

const navItems = [
  { label: 'Главная', path: '/', icon: <HomeIcon /> },
  { label: 'Группы', path: '/groups', icon: <GroupsIcon /> },
  { label: 'Спикерские', path: '/speakers', icon: <MicIcon /> },
  { label: 'Литература', path: '/literature', icon: <MenuBookIcon /> },
  { label: 'Контакты', path: '/contacts', icon: <ContactMailIcon /> },
];

function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export const Header = ({ onToggleTheme, isDark }: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            bgcolor: theme.palette.background.paper,
            borderBottom: `1px solid ${theme.palette.divider}`,
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ py: 0.5, gap: 1 }}>
              <Box
                component={RouterLink}
                to="/"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  textDecoration: 'none',
                  flexGrow: { xs: 1, md: 0 },
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '12px',
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                  }}
                >
                  ДА
                </Box>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: theme.palette.text.primary,
                      lineHeight: 1.2,
                      fontSize: '1rem',
                    }}
                  >
                    Анонимные
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      lineHeight: 1.2,
                      fontSize: '0.75rem',
                    }}
                  >
                    Депрессивные
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  gap: 0.5,
                  flexGrow: 1,
                  justifyContent: 'center',
                }}
              >
                {navItems.map((item) => (
                  <Button
                    key={item.path}
                    component={RouterLink}
                    to={item.path}
                    startIcon={item.icon}
                    sx={{
                      color: isActive(item.path)
                        ? theme.palette.primary.main
                        : theme.palette.text.secondary,
                      bgcolor: isActive(item.path)
                        ? `${theme.palette.primary.main}10`
                        : 'transparent',
                      '&:hover': {
                        bgcolor: isActive(item.path)
                          ? `${theme.palette.primary.main}18`
                          : `${theme.palette.primary.main}08`,
                        color: theme.palette.primary.main,
                      },
                      fontWeight: isActive(item.path) ? 600 : 400,
                      px: 2,
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Chip
                  icon={<FavoriteIcon sx={{ fontSize: '14px !important' }} />}
                  label="Помощь"
                  size="small"
                  component="a"
                  href="tel:+74951234567"
                  clickable
                  color="primary"
                  variant="outlined"
                  sx={{
                    display: { xs: 'none', sm: 'flex' },
                    '& .MuiChip-label': { fontSize: '0.8rem' },
                  }}
                />

                <IconButton
                  onClick={onToggleTheme}
                  aria-label={isDark ? 'Переключить на светлую тему' : 'Переключить на тёмную тему'}
                  sx={{
                    color: theme.palette.text.secondary,
                    '&:hover': { color: theme.palette.primary.main },
                  }}
                >
                  {isDark ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>

                <IconButton
                  onClick={() => setMobileOpen(true)}
                  sx={{
                    display: { xs: 'flex', md: 'none' },
                    color: theme.palette.text.primary,
                  }}
                  aria-label="Открыть меню навигации"
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: '85%',
              maxWidth: 360,
              bgcolor: theme.palette.background.paper,
              borderTopLeftRadius: 24,
              borderBottomLeftRadius: 24,
            },
          },
          backdrop: {
            sx: { bgcolor: 'rgba(0,0,0,0.4)' },
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
            Навигация
          </Typography>
          <IconButton onClick={() => setMobileOpen(false)} aria-label="Закрыть меню">
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List sx={{ px: 1 }}>
          {navItems.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                component={RouterLink}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                sx={{
                  borderRadius: 3,
                  bgcolor: isActive(item.path) ? `${theme.palette.primary.main}12` : 'transparent',
                  color: isActive(item.path) ? theme.palette.primary.main : theme.palette.text.primary,
                  '&:hover': {
                    bgcolor: `${theme.palette.primary.main}10`,
                  },
                }}
              >
                <Box sx={{ mr: 2, color: 'inherit', display: 'flex' }}>{item.icon}</Box>
                <ListItemText
                  primary={item.label}
                  sx={{
                    '& .MuiListItemText-primary': {
                      fontWeight: isActive(item.path) ? 600 : 400,
                      fontSize: '1rem',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Button
            variant="contained"
            fullWidth
            startIcon={<FavoriteIcon />}
            component="a"
            href="tel:+74951234567"
            sx={{ mb: 1 }}
          >
            Позвонить
          </Button>
        </Box>
      </Drawer>

      <Toolbar sx={{ py: 1 }} />
    </>
  );
};
