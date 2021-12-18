import { mauveDark, slateDark, violetDark, redDark, grayDark } from '@radix-ui/colors';

import { Theme } from '.';
import { breakpoints } from './breakpoints';

// Dark theme is dead, long live the Sith theme
export const sithTheme: Theme = {
  name: 'sith',
  breakpoints,
  colors: {
    main: mauveDark.mauve1,
    primary: mauveDark.mauve12,
    secondary: violetDark.violet11,
    tertiary: grayDark.gray11,
    border: {
      primary: violetDark.violet8,
      secondary: mauveDark.mauve5
    },
    button: {
      main: {
        bg: mauveDark.mauve3,
        bgHover: mauveDark.mauve4,
        color: mauveDark.mauve12
      }
    },
    sidebar: {
      bg: mauveDark.mauve1,
      title: slateDark.slate11,
      hover: {
        bg: violetDark.violet4,
        bgPressed: violetDark.violet5,
        color: violetDark.violet11
      }
    },
    status: {
      // TODO
      error: redDark.red11,
      warning: 'orange',
      success: 'green',
      info: 'blue'
    },
    text: {
      primary: 'white',
      secondary: violetDark.violet11
    },
    scrollbar: {
      bg: 'none',
      bgHover: 'none',
      thumb: mauveDark.mauve5
    },
    tooltip: {
      bg: violetDark.violet4,
      bgBorder: violetDark.violet8
    }
  },
  fonts: { logo: 'Archivo', main: 'Open Sans' },
  fontSizes: {
    button: '16px',
    input: '16px',
    label: '16px',
    sidebar: {
      title: '12px',
      item: '16px'
    },
    text: '16px',
    visum: '24px',
    tooltip: '11px',
    l: '20px'
  }
};
