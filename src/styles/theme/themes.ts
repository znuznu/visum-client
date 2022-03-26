import {
  blue,
  blueDark,
  indigo,
  indigoDark,
  gray,
  grayDark,
  grass,
  grassDark,
  mauve,
  mauveDark,
  orange,
  orangeDark,
  red,
  redDark,
  greenDark,
  green
} from '@radix-ui/colors';

import { Theme } from '.';
import { breakpoints } from './breakpoints';
import { favoriteIconColor, tmdbPrimaryColor, watchIconColor } from './colors';
import { fonts, fontSizes } from './fonts';

const sharedColors = {
  tmdb: {
    primary: tmdbPrimaryColor
  },
  icons: {
    favorite: favoriteIconColor,
    watch: watchIconColor
  }
};

export const darkTheme: Theme = {
  name: 'dark' as const,
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
      default: {
        color: mauveDark.mauve12,
        colorHover: mauveDark.mauve12,
        bg: mauveDark.mauve3,
        bgHover: mauveDark.mauve4,
        bgDisabled: mauveDark.mauve2
      },
      ghost: {
        bg: 'none',
        bgHover: 'none',
        bgDisabled: mauveDark.mauve2,
        color: grayDark.gray11,
        colorHover: indigoDark.indigo11
      }
    },
    checkbox: {
      border: indigoDark.indigo7,
      bgHover: indigoDark.indigo5,
      indicator: indigoDark.indigo11
    },
    sidebar: {
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
      primary: grayDark.gray12,
      secondary: indigoDark.indigo11
    },
    toast: {
      default: {
        description: grayDark.gray11,
        bg: mauveDark.mauve3,
        title: mauveDark.mauve12
      },
      error: {
        bg: redDark.red3,
        description: redDark.red9,
        title: redDark.red11
      },
      success: {
        bg: greenDark.green3,
        description: greenDark.green9,
        title: greenDark.green11
      }
    },
    scrollbar: {
      bg: 'none',
      bgHover: 'none',
      thumb: mauveDark.mauve5
    },
    tooltip: {
      bg: indigoDark.indigo4,
      bgBorder: indigoDark.indigo8
    },
    select: {
      item: {
        bgHover: indigoDark.indigo4
      }
    },
    ...sharedColors
  }
};

export const lightTheme: Theme = {
  name: 'light' as const,
  breakpoints,
  fonts,
  fontSizes,
  colors: {
    main: mauve.mauve1,
    primary: mauve.mauve12,
    secondary: indigo.indigo11,
    tertiary: gray.gray11,
    border: {
      primary: indigo.indigo8,
      secondary: mauve.mauve5
    },
    button: {
      default: {
        color: mauve.mauve12,
        colorHover: mauve.mauve12,
        bg: mauve.mauve3,
        bgHover: mauve.mauve4,
        bgDisabled: mauve.mauve2
      },
      ghost: {
        bg: 'none',
        bgHover: 'none',
        color: gray.gray11,
        colorHover: indigo.indigo11,
        bgDisabled: mauve.mauve2
      }
    },
    checkbox: {
      border: indigo.indigo7,
      bgHover: indigo.indigo5,
      indicator: indigo.indigo11
    },
    sidebar: {
      hover: {
        bg: indigo.indigo4,
        bgPressed: indigo.indigo5,
        color: indigo.indigo11
      }
    },
    status: {
      // TODO
      error: red.red11,
      warning: orange.orange9,
      success: grass.grass9,
      info: blue.blue9
    },
    text: {
      primary: gray.gray12,
      secondary: indigo.indigo11
    },
    toast: {
      default: {
        description: gray.gray11,
        bg: mauve.mauve3,
        title: mauve.mauve12
      },
      error: {
        bg: red.red3,
        description: red.red9,
        title: red.red11
      },
      success: {
        bg: green.green3,
        description: green.green9,
        title: green.green11
      }
    },
    scrollbar: {
      bg: 'none',
      bgHover: 'none',
      thumb: mauve.mauve5
    },
    tooltip: {
      bg: indigo.indigo4,
      bgBorder: indigo.indigo8
    },
    select: {
      item: {
        bgHover: indigo.indigo4
      }
    },
    ...sharedColors
  }
};
