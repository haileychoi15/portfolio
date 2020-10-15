import React from 'react';
import styled from 'styled-components';
import { MdAdd, MdArrowForward } from 'react-icons/md';
import CircleButton from './CircleButton';
import { useAnimation } from '../hooks/UseAnimation';
import { useLocation } from '../hooks/UseLocation';

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
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  padding-left: 50px;
  margin: 100px 0;
  @media screen and (min-width: 768px) {
    width: 50%;
    margin: 0;
  }
`;

const Photo = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 200px;
  height: 200px;
  //background-image: url("/IMG_7629.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  & img {
    width: 100%;
    height: 100%;
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
  font-weight: 400;
  color: #4fc08d; //rgb(252, 106, 101);
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
  font-weight: 400;
  margin-right: 20px;
`;

function Home () {
    return (
        <Container id="home">
            <MeBlock {...useLocation('home')}>
                <Photo>
                </Photo>
                <Name {...useAnimation('right')}>Hailey Choi</Name>
                <Job {...useAnimation('right', '1', '0.4')}>front-end web developer</Job>
                <Description {...useAnimation('right', '1', '0.8')}>Hello, I am a front-end web developer from Seoul, South Korea. I enjoy building crafted code based web applications. Also have a passion for Ul/UX design. </Description>
            </MeBlock>
            <MenuButton {...useAnimation('left')}>
                <ButtonText>Contact</ButtonText>
                <CircleButton>
                    <MdAdd className="button-icon" />
                </CircleButton>
            </MenuButton>
            <ResumeButton {...useAnimation('left')}>
                <ButtonText>Resume</ButtonText>
                <CircleButton color="green" backgroundColor="white" border>
                    <MdArrowForward />
                </CircleButton>
            </ResumeButton>
        </Container>
    );
}

export default Home;