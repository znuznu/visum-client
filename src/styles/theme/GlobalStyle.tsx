import { createGlobalStyle } from 'styled-components';

import Archivo from '../fonts/archivo/archivo-v8-latin.woff';
import Archivo2 from '../fonts/archivo/archivo-v8-latin.woff2';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    padding: 0;
    margin: 0;
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
    background: #000;
  }
  
  @font-face {
    font-family: 'Archivo';
    font-display: fallback;
    src: local('Archivo'), local('Archivo'),
    url(${Archivo2}) format('woff2'),
    url(${Archivo}) format('woff');
  }
`;

export default GlobalStyle;
