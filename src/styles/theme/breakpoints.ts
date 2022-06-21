export interface Breakpoints {
  xs: string;
  s: string;
  m: string;
  l: string;
}

export const S_BREAKPOINT_IN_PIXEL = 700;
export const M_BREAKPOINT_IN_PIXEL = 964;

export const breakpoints: Breakpoints = {
  xs: '450px' as const,
  s: `${S_BREAKPOINT_IN_PIXEL}px` as const,
  m: `${M_BREAKPOINT_IN_PIXEL}px` as const,
  l: '1433px' as const
};

export const SIDEBAR_WIDTH_PX = 250;
export const SIDEBAR_BREAKPOINT_PX = M_BREAKPOINT_IN_PIXEL + SIDEBAR_WIDTH_PX;
