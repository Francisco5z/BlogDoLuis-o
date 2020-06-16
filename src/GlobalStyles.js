import { createGlobalStyle } from 'styled-components';

// #04d261

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    font-family: 'Roboto'
  }

  body, html, #root {
    background-color: #202124;
    color: #fff;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Ubuntu'
  }
`;