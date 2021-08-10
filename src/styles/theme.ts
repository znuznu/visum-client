interface Breakpoints {
  s: string;
  m: string;
  l: string;
  xl: string;
}

interface Colors {
  primary: string;
  secondary: string;
  button: {
    main: {
      bg: string;
      color: string;
    };
  };
}

interface Theme {
  name: string;
  breakpoints: Breakpoints;
  colors: Colors;
}

const breakpoints: Breakpoints = {
  s: 'FILLpx' as const,
  m: 'FILLpx' as const,
  l: 'FILLpx' as const,
  xl: 'FILLpx' as const
};

export const sith: Theme = {
  name: 'sith',
  breakpoints,
  colors: {
    primary: '#000000',
    secondary: '#ffffff',
    button: {
      main: {
        bg: '#fffffff',
        color: '#000000'
      }
    }
  }
};
