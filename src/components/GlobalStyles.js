import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Fira Sans Condensed', sans-serif;    
    color: #333333;
    background-color: #fff;
    padding: 0;
    margin: 0;
  }
  
  body * {
    box-sizing: border-box;
  }
  
  ul, ol, li {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  
  dl, dt, dd {
    margin: 0;
    padding: 0;
  }
  
  a {
    text-decoration: none;
    color: #333;
  }
  
  button {
    border: none;
    cursor: pointer;
    outline: none;
  }
`;

export default GlobalStyles;