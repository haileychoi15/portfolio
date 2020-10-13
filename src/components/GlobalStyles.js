import React from 'react';
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Fira Sans Condensed', sans-serif;    
    color: #333333;
    background-color: #f8f9fa;
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