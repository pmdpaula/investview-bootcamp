import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  ${normalize}

  html {
    font-size: 62.5%;
  }

  ${normalize}

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily};
    background-color: ${({ theme }) => theme.colors.background.primary.color};
    font-family: ${({ theme }) => theme.defaultStyles.fontFamily};
    color: ${({ theme }) => theme.colors.text.primary.color};
    background-color: ${({ theme }) => theme.colors.background.primary.color};
    display: flex;
    min-height: 100vh;
    width: 100%;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
