import { createGlobalStyle, css } from "styled-components";
import { ResetStyle } from "./ResetStyle";
import theme from "./theme";

const GlobalStyle = css`
  html,
  body {
    font-family: "Circular STD", sans-serif;
    scroll-behavior: smooth;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.colors.background};
  }
  // Scrollbar styles
  html {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.colors.neutral_10};
  }

  body::-webkit-scrollbar {
    width: 6px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.neutral_10};
    border-radius: 10px;
  }
  h1,
  h4 {
    font-weight: 700;
  }
  h1 {
    font-size: clamp(2rem, 1.6479rem + 1.5023vw, 3rem);
    line-height: 105.02%;
    letter-spacing: -0.03em;
  }
  h4 {
    font-weight: 700;
    font-size: 1rem;
    line-height: 20px;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    color: ${theme.colors.neutral_10};
  }
  input:-webkit-autofill,
  textarea:-webkit-autofill,
  select:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 50px ${({ theme }) => theme.colors.background}
      inset;
    box-shadow: 0 0 0 50px ${({ theme }) => theme.colors.background} inset;
  }

  input:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 50px ${({ theme }) => theme.colors.background}
      inset;
    box-shadow: 0 0 0 50px ${({ theme }) => theme.colors.background} inset;
  }
  input,
  select {
    font-size: 100%;
  }
`;
const BasedStyles = createGlobalStyle`
    ${ResetStyle}
    ${GlobalStyle}
`;

export default BasedStyles;
