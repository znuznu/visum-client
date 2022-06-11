// eslint-disable-next-line
import { DefaultTheme } from 'styled-components';

import { Breakpoints } from './breakpoints';
import { Colors } from './colors';
import { Fonts, Sizes as FontSizes } from './fonts';

export interface Theme extends DefaultTheme {
  name: string;
  breakpoints: Breakpoints;
  fonts: Fonts;
  fontSizes: FontSizes;
  colors: Colors;
}
