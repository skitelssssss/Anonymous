import { useState, useMemo, useCallback } from 'react';

export function useThemeMode() {
  const [mode, setMode] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('da-theme-mode');
      if (saved === 'dark' || saved === 'light') return saved;
    }
    return 'light';
  });

  const toggleTheme = useCallback(() => {
    setMode((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('da-theme-mode', next);
      return next;
    });
  }, []);

  return { mode, toggleTheme, isDark: mode === 'dark' };
}
