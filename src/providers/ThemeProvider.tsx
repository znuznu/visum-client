import { createContext } from 'react';
import { Theme } from '../styles/theme';
import { darkTheme } from '../styles/theme/themes';

interface ThemeContext {
  selectedTheme: Theme;
  setSelectedTheme: (theme: Theme) => void;
}

const themeContext = createContext<ThemeContext>({
  selectedTheme: darkTheme,
  setSelectedTheme: (_theme: Theme) => {}
});

export default themeContext;
