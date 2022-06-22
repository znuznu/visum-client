import { useContext } from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

import useTheme from 'hooks/useTheme';

import ThemeContext from 'providers/ThemeProvider';

import Button from 'components/primitives/Button';

const ThemeSwitcher = () => {
  const themeContext = useContext(ThemeContext);
  const { theme, toggleTheme } = useTheme();

  const handleClick = () => {
    const newTheme = toggleTheme();
    themeContext.setSelectedTheme(newTheme);
  };

  return (
    <Button aria-label="Switch theme" onClick={handleClick}>
      {theme.name === 'dark' ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

export default ThemeSwitcher;
