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
  xxl: string;
  xxxl: string;
}

export const fonts: Fonts = { logo: 'Archivo', main: 'Open Sans' };

export const fontSizes: Sizes = {
  xs: '0.75rem' as const,
  s: '0.875rem' as const,
  m: '1rem' as const,
  l: '1.25rem' as const,
  xl: '1.5rem' as const,
  xxl: '2.5rem' as const,
  xxxl: '3rem' as const
};
