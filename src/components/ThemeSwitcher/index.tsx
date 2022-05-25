import { useContext } from 'react';

import ThemeContext from 'providers/ThemeProvider';
import useTheme from 'hooks/useTheme';
import Button from 'components/common/Button';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

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
