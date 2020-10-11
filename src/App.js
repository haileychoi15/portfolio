import React, { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';

const GlobalStyle = createGlobalStyle`
  body {
    color: #333;
    background-color: #eee;
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
  
  button {
    cursor: pointer;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
        <Container>
          <Header />
          <Main />
        </Container>
    </Fragment>
  );
}

export default App;
