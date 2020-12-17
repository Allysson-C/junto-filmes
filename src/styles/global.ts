import { createGlobalStyle } from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';
import 'react-toastify/dist/ReactToastify.min.css';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body {
    background-color: rgb(255, 255, 255);
    height: 100%;
    font-size: 16px;
    font-weight: 300;
    line-height: 22px;
    color: #180a33;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 700;
  }

  body, input, button{
    font-family: 'Roboto Condensed', sans-serif;
  }

  button {
    cursor: pointer;
  }

  .Toastify__toast--error {
    background: #c53030;
  }
`;

export default GlobalStyles;
