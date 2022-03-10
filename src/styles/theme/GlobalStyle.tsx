import { createGlobalStyle } from 'styled-components';

import Archivo from '../fonts/archivo/archivo-v8-latin.woff';
import Archivo2 from '../fonts/archivo/archivo-v8-latin.woff2';

import OpenSans from '../fonts/open-sans/open-sans-v27-latin-regular.woff';
import OpenSans2 from '../fonts/open-sans/open-sans-v27-latin-regular.woff2';

const GlobalStyle = createGlobalStyle`
  /*** The new CSS Reset - version 1.2.0 (last updated 23.7.2021) ***/

  *:where(:not(iframe, canvas, img, svg, video):not(svg *)) {
    all: unset;
    display: revert;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ol,
  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }  

  table {
    border-collapse: collapse;
  }

  textarea {
    white-space: revert;
  }

  select::-ms-expand {
    display: none;
  }

  /*** CSS Reset end */

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

    background-color: ${(props) => {
      // @ts-ignore
      return props.theme.colors.main;
    }}; 
  }

  #root {
    display: flex;
    flex-direction: column;
    
    background-color: ${(props) => {
      // @ts-ignore
      return props.theme.colors.main;
    }};

     *:focus {
      outline: 2px solid ${(props) => {
        // @ts-ignore
        return props.theme.colors.secondary;
      }};
    }
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
