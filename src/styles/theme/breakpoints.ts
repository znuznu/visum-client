export interface Breakpoints {
  xs: string;
  s: string;
  m: string;
  l: string;
}

// In order to check the size in TS code, seems ugly
export const M_BREAKPOINT_IN_PIXEL = 964;

export const breakpoints: Breakpoints = {
  xs: '450px' as const,
  s: '700px' as const,
  m: `${M_BREAKPOINT_IN_PIXEL}px` as const,
  l: '1433px' as const
};
