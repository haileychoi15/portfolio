import React from 'react';
import styled from 'styled-components';
import { AiOutlineRight, AiOutlinePlus } from 'react-icons/ai';
import Header from './Header';
import CircleButton from "./CircleButton";

const Container = styled.div`
  position: relative;
  padding: 20px;
  width: 100%;
  @media screen and (min-width: 768px) {
    height: 800px;
    padding: 50px;
  }
`;

const MeBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    width: 40%;
    margin-bottom: 0;
  }
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
  color: rgb(252, 106, 101);
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

const MenuButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    top: 50px;
    right: 50px;
  }
`;

const ResumeButton = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    bottom: 50px;
    right: 50px;
  }
`;

const ButtonText = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin-right: 20px;
`;

function Home () {
    return (
        <Container id="home">
            <Header />
            <MeBlock>
                <Name>Hailey Choi</Name>
                <Job>front-end web developer</Job>
                <Description>Hello, I am a front-end web developer from Seoul, South Korea. I enjoy building crafted code based web applications. Also have a passion for Ul/UX design. </Description>
            </MeBlock>
            <MenuButton>
                <ButtonText>Contact</ButtonText>
                <CircleButton color="black">
                    <AiOutlinePlus className="button-icon" />
                </CircleButton>
            </MenuButton>
            <ResumeButton>
                <ButtonText>Resume</ButtonText>
                <CircleButton>
                    <AiOutlineRight />
                </CircleButton>
            </ResumeButton>
        </Container>
    );
}

export default Home;