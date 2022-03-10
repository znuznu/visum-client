import { red, grass } from '@radix-ui/colors';

type ButtonColor = {
  color: string;
  colorHover: string;
  bg: string;
  bgHover: string;
  bgDisabled: string;
};

export interface Colors {
  main: string;
  primary: string;
  secondary: string;
  tertiary: string;
  border: {
    primary: string;
    secondary: string;
  };
  button: {
    default: ButtonColor;
    ghost: ButtonColor;
  };
  checkbox: {
    border: string;
    bgHover: string;
    indicator: string;
  };
  sidebar: {
    hover: {
      bg: string;
      bgPressed: string;
      color: string;
    };
  };
  tooltip: {
    bg: string;
    bgBorder: string;
  };
  status: {
    error: string;
    warning: string;
    success: string;
    info: string;
  };
  text: {
    primary: string;
    secondary: string;
  };
  scrollbar: { bg: string; bgHover: string; thumb: string };
  tmdb: { primary: string };
  icons: {
    favorite: string;
    watch: string;
  };
  select: {
    item: {
      bgHover: string;
    };
  };
}

export const tmdbPrimaryColor = '#90cea1';
export const favoriteIconColor = red.red11;
export const watchIconColor = grass.grass11;
