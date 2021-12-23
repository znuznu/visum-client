export interface Breakpoints {
  s: string;
  m: string;
  l: string;
  sidebar: string;
  // xl: string;
}

export const breakpoints: Breakpoints = {
  s: '450px' as const,
  m: '700px' as const,
  l: '1433px' as const,
  sidebar: '1024px' as const
};
