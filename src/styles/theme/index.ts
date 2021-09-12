interface Breakpoints {
  s: string;
  m: string;
  l: string;
  // xl: string;
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
  status: {
    error: string;
    warning: string;
    success: string;
    info: string;
  };
}

interface Fonts {
  logo: string;
  main: string;
}
interface Theme {
  name: string;
  breakpoints: Breakpoints;
  colors: Colors;
  fonts: Fonts;
}

const breakpoints: Breakpoints = {
  s: '300px' as const,
  m: '700px' as const,
  l: '1433px' as const
  // xl: 'FILLpx' as const
};

export const sithTheme: Theme = {
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
    },
    status: {
      error: 'red',
      warning: 'orange',
      success: 'green',
      info: 'blue'
    }
  },
  fonts: { logo: 'Archivo', main: 'Oswald' }
};
