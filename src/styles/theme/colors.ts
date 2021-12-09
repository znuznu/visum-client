export interface Colors {
  main: string;
  primary: string;
  secondary: string;
  border: {
    primary: string;
    secondary: string;
  };
  button: {
    main: {
      bg: string;
      bgHover: string;
      color: string;
    };
  };
  sidebar: {
    bg: string;
    title: string;
    hover: {
      bg: string;
      bgPressed: string;
      color: string;
    };
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
}
