import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 1000px;
`;

const MeBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10%;
  width: 100%;
  height: 300px;
`;

const Name = styled.div`
  font-size: 36px;
  font-weight: 900;
  @media screen and (min-width: 768px) {
    font-size: 52px;
  }
`;

const Job = styled.div`
  font-size: 28px;
  font-weight: 500;
  opacity: 0.8;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`;

const Description = styled.p`
  font-size: 22px;
  font-weight: 300;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

function Main () {
    return (
        <Container>
            <MeBlock>
                <Name>Hailey Choi</Name>
                <Job>front-end web developer</Job>
                <Description>Hello, I am a front-end web developer from Seoul, South Korea. I enjoy building crafted code based web applications. Also have a passion for Ul/UX design. </Description>
            </MeBlock>
        </Container>
    );
}

export default Main;