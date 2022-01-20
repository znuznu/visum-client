import {
  mauveDark,
  indigoDark,
  redDark,
  grayDark,
  orangeDark,
  grassDark,
  blueDark
} from '@radix-ui/colors';

import { Theme } from '.';
import { breakpoints } from './breakpoints';
import { fonts, fontSizes } from './fonts';

// Dark theme is dead, long live the Sith theme
export const sithTheme: Theme = {
  name: 'sith' as const,
  breakpoints,
  fonts,
  fontSizes,
  colors: {
    main: mauveDark.mauve1,
    primary: mauveDark.mauve12,
    secondary: indigoDark.indigo11,
    tertiary: grayDark.gray11,
    border: {
      primary: indigoDark.indigo8,
      secondary: mauveDark.mauve5
    },
    button: {
      main: {
        bg: mauveDark.mauve3,
        bgHover: mauveDark.mauve4,
        color: mauveDark.mauve12,
        bgDisabled: mauveDark.mauve2
      }
    },
    checkbox: {
      border: indigoDark.indigo7,
      bgHover: indigoDark.indigo5,
      indicator: indigoDark.indigo11
    },
    sidebar: {
      bg: mauveDark.mauve1,
      hover: {
        bg: indigoDark.indigo4,
        bgPressed: indigoDark.indigo5,
        color: indigoDark.indigo11
      }
    },
    status: {
      // TODO
      error: redDark.red11,
      warning: orangeDark.orange9,
      success: grassDark.grass9,
      info: blueDark.blue9
    },
    text: {
      primary: 'white',
      secondary: indigoDark.indigo11
    },
    scrollbar: {
      bg: 'none',
      bgHover: 'none',
      thumb: mauveDark.mauve5
    },
    tooltip: {
      bg: indigoDark.indigo4,
      bgBorder: indigoDark.indigo8
    }
  }
};
