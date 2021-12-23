export interface Fonts {
  logo: string;
  main: string;
}

export interface Sizes {
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
}

export const fonts: Fonts = { logo: 'Archivo', main: 'Open Sans' };

export const fontSizes: Sizes = {
  xs: '12px' as const,
  s: '14px' as const,
  m: '16px' as const,
  l: '20px' as const,
  xl: '24px' as const
};
