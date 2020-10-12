import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding: 0 5%;
  @media screen and (min-width: 768px) {
    height: 598px;
    padding: 0 10%;
  }
`;

const MeBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
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

const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  @media screen and (min-width: 768px) {
    height: 300px;
  }
`;

const DownloadButton = styled.button`
  border-radius: 6px;
  padding: 20px;
  font-size: 20px;
  color: #fff;
  background-color: #ee5544;
  transition: all 250ms ease-in-out;
  box-shadow: 4px 4px 15px 0px rgba(111,0,0,0.2);
  &:hover {
    box-shadow: 4px 4px 15px 0px rgba(111,0,0,0.5);
    transform: translateY(-2px);
  }
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`;


function Me () {
    return (
        <Container>
            <MeBlock>
                <Name>Hailey Choi</Name>
                <Job>front-end web developer</Job>
                <Description>Hello, I am a front-end web developer from Seoul, South Korea. I enjoy building crafted code based web applications. Also have a passion for Ul/UX design. </Description>
            </MeBlock>
            <ButtonBlock>
                <DownloadButton>
                    <span className="state">Open to Work</span>
                </DownloadButton>
            </ButtonBlock>
        </Container>
    );
}

export default Me;