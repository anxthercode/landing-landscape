import { useState, useEffect, useCallback } from 'react';

export function useDarkMode() {
  // Lazy initializer — читает localStorage один раз при монтировании,
  // не вызывает flash (hydration mismatch исключён через SSR-safe проверку)
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('theme') === 'dark';
  });

  // Синхронизируем класс на <html> при каждом изменении isDark
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleDark = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  return [isDark, toggleDark] as const;
}
