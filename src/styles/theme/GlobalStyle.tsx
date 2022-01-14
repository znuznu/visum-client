import { createGlobalStyle } from 'styled-components';

import Archivo from '../fonts/archivo/archivo-v8-latin.woff';
import Archivo2 from '../fonts/archivo/archivo-v8-latin.woff2';

import OpenSans from '../fonts/open-sans/open-sans-v27-latin-regular.woff';
import OpenSans2 from '../fonts/open-sans/open-sans-v27-latin-regular.woff2';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    padding: 0;
    margin: 0;
    height: 100%;

    font-size: 100%;

    @media screen and (max-width: ${({ theme }) => {
      //@ts-ignore
      return theme.breakpoints.m;
    }}) {
      font-size: 90%;
    }
  }

  #root {
    display: flex;
    flex-direction: column;
    
    background-color: ${(props) => {
      // @ts-ignore
      return props.theme.colors.main;
    }};
  }

  a {
    text-decoration: none;
  }
  
  @font-face {
    font-family: 'Archivo';
    font-display: fallback;
    src: local('Archivo'), local('Archivo'),
    url(${Archivo2}) format('woff2'),
    url(${Archivo}) format('woff');
  }

  @font-face {
    font-family: 'Open Sans';
    font-display: fallback;
    src: local(''), 
    url(${OpenSans2}) format('woff2'),
    url(${OpenSans}) format('woff');
  }
`;

export default GlobalStyle;
