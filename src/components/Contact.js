import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  color: #333;
  background-color: #eee;
  @media screen and (min-width: 768px) {
     height: 800px;
  }
`;


function Contact () {
    return (
        <Container id="contact">
        </Container>
    );
}

export default Contact;