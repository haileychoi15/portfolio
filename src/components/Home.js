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
  min-height: 100vh;
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
  margin: 100px 0;
  @media screen and (min-width: 768px) {
    width: 70%;
    padding-left: 50px;
    margin: 0;
  }
  @media screen and (min-width: 1024px) {
    width: 50%;
    margin: 0;
  }
`;

const Name = styled.div`
  font-size: 36px;
  font-weight: 900;
  @media screen and (min-width: 480px) {
    font-size: 42px;
  }
  @media screen and (min-width: 768px) {
    font-size: 52px;
  }
`;

const Job = styled.div`
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 400;
  color: #4fc08d;
  @media screen and (min-width: 480px) {
    font-size: 28px;
  }
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`;

const Description = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.4em;
  & + & {
    margin-top: 15px;
  }
  @media screen and (min-width: 480px) {
    font-size: 22px;
  }
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
    const me = {
        name: 'Hailey Choi',
        job: 'front-end web developer',
        description: ['Hello, I am a front-end web developer based in Seoul, South Korea. ' +
        'I enjoy making things that enhance people\'s lives with my codes. ' +
        'Especially I focus on well crafted code and minimal UI/UX design to deliver simplicity and clarity.'
        ,'I spend my time learning new things about development, ' +
            'reviewing codes, and building web applications to bring my work to life.']
    };
    return (
        <Container id="home">
            <MeBlock {...useLocation('home')}>
                <Name {...useAnimation('right', 35)}>{me.name}</Name>
                <Job {...useAnimation('right',35,'0.4')}>{me.job}</Job>
                <Description {...useAnimation('right',35 ,'0.8')}>{me.description[0]}</Description>
                <Description {...useAnimation('right',35 ,'1.2')}>{me.description[1]}</Description>
            </MeBlock>
            <MenuButton {...useAnimation('left',40, '1.5')}>
                <ButtonText>Contact</ButtonText>
                <CircleButton popup={true} role="contact">
                    <MdAdd className="plus-icon" />
                </CircleButton>
            </MenuButton>
            <ResumeButton {...useAnimation('left',40, '1.5')}>
                <ButtonText>Resume</ButtonText>
                <CircleButton color="green" backgroundColor="white" border={true} role="contact">
                    <MdArrowForward />
                </CircleButton>
            </ResumeButton>
        </Container>
    );
}

export default Home;