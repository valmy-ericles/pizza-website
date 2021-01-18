import { createGlobalStyle } from 'styled-components';

export const GlogalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Kanit', sans-serif;
  }

  #root {
    overflow-x: hidden;
  }
`;