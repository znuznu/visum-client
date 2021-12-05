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
    background: rgb(9,46,48);
    background: linear-gradient(320deg, rgba(9,46,48,1) 0%, rgba(21,23,24,1) 25%, rgba(21,23,24,1) 75%, rgba(44,34,78,1) 100%);
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
