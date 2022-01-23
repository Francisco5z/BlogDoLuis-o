import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;

    font-family: 'Roboto';
  }

  body, html {
    background-color: ${(props) => props.theme.colors.backgroundColor};
    color: ${(props) => props.theme.colors.textColor};
  }
`;
