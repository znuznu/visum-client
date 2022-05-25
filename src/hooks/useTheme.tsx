import { useState } from 'react';

import { Theme } from 'styles/theme';
import { darkTheme, lightTheme } from 'styles/theme/themes';

import useLocalStorage from './useLocalStorage';

const THEME_KEY = 'visum-theme';

const useTheme = () => {
  const [themeName, setThemeName] = useLocalStorage(THEME_KEY, 'dark');
  const [theme, setTheme] = useState<Theme>(
    themeName === 'dark' ? darkTheme : lightTheme
  );

  const updateTheme = (newThemeName: 'dark' | 'light') => {
    setThemeName(newThemeName);

    if (newThemeName === 'dark') {
      setTheme(darkTheme);

      return darkTheme;
    }

    setTheme(lightTheme);

    return lightTheme;
  };

  const toggleTheme = () => {
    return themeName === 'dark' ? updateTheme('light') : updateTheme('dark');
  };

  return { theme, toggleTheme };
};

export default useTheme;
