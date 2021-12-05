interface Breakpoints {
  s: string;
  m: string;
  l: string;
  // xl: string;
}

interface Colors {
  main: string;
  primary: string;
  secondary: string;
  border: string;
  button: {
    main: {
      bg: string;
      bgHover: string;
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

interface FontSizes {
  button: string;
  input: string;
  label: string;
  text: string;
}

interface Theme {
  name: string;
  breakpoints: Breakpoints;
  colors: Colors;
  fonts: Fonts;
  fontSizes: FontSizes;
}

const breakpoints: Breakpoints = {
  s: '300px' as const,
  m: '700px' as const,
  l: '1433px' as const
  // xl: 'FILLpx' as const
};

// Dark theme is dead, long live the Sith theme
export const sithTheme: Theme = {
  name: 'sith',
  breakpoints,
  colors: {
    main: '#151718',
    primary: '#ecedee',
    secondary: '#9e8cfc',
    border: '#3a3f42',
    button: {
      main: {
        bg: '#27292a',
        bgHover: '#2c2f30',
        color: '#ecedee'
      }
    },
    status: {
      error: '#ff7f7f',
      warning: 'orange',
      success: 'green',
      info: 'blue'
    }
  },
  fonts: { logo: 'Archivo', main: 'Open Sans' },
  fontSizes: {
    button: '16px',
    input: '16px',
    label: '16px',
    text: '16px'
  }
};
