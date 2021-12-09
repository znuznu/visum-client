import { Breakpoints } from './breakpoints';

import { Colors } from './colors';
import { Fonts, Sizes as FontSizes } from './fonts';

export interface Theme {
  name: string;
  breakpoints: Breakpoints;
  colors: Colors;
  fonts: Fonts;
  fontSizes: FontSizes;
}
