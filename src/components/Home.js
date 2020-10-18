import React from 'react';
import styled, {css} from 'styled-components';
import { MdAdd, MdArrowForward } from 'react-icons/md';
import CircleButton from './CircleButton';
import { useAnimation } from '../hooks/UseAnimation';
import { useLocation } from '../hooks/UseLocation';

const mainColor = css`
  ${({mainColor}) => css`
    color: ${mainColor};
  `}
`;

const Container = styled.div`
  position: relative;
  padding: 1.25em;
  width: 100vw;
  min-height: 100vh;
  @media screen and (min-width: 768px) {
    padding: 3.125em;
  }
`;

const MeBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin: 6.25rem 0;
  @media screen and (min-width: 768px) {
    width: 70%;
    padding-left: 1em;
    margin: 0;
  }
  @media screen and (min-width: 1024px) {
    width: 50%;
    margin: 0;
  }
`;

const Name = styled.div`
  font-size: 2.25rem;
  font-weight: 900;
  @media screen and (min-width: 480px) {
    font-size: 2.625rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 3.25rem;
  }
`;

const Job = styled.div`
  margin-bottom: 1em;
  font-size: 1.5rem;
  font-weight: 400;
  @media screen and (min-width: 480px) {
    font-size: 1.75rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.875rem;
  }
  ${mainColor}
`;

const Description = styled.p`
  margin: 0;
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.4em;
  & + & {
    margin-top: 0.6em;
  }
  @media screen and (min-width: 480px) {
    font-size: 1.375rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const MenuButton = styled.div`
  position: absolute;
  top: 1.25em;
  right: 1.25em;
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    top: 3.125em;
    right: 3.125em;
  }
`;

const ResumeButton = styled.div`
  position: absolute;
  bottom: 1.25em;
  right: 1.25em;
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    bottom: 3.125em;
    right: 3.125em;
  }
`;

const ButtonText = styled.span`
  font-size: 1.25rem;
  font-weight: 400;
  margin-right: 1em;
`;

const Link = styled.a`
  width: 100%;
  height: 100%;
`;

function Home ({mainColor}) {
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
                <Job {...useAnimation('right',35,'0.4')} mainColor={mainColor}>{me.job}</Job>
                <Description {...useAnimation('right',35 ,'0.8')}>{me.description[0]}</Description>
                <Description {...useAnimation('right',35 ,'1.2')}>{me.description[1]}</Description>
            </MeBlock>
            <MenuButton {...useAnimation('left',40, '1.6')}>
                <ButtonText>Contact</ButtonText>
                <CircleButton popup={true} mainColor={mainColor}>
                    <MdAdd className="plus-icon" />
                </CircleButton>
            </MenuButton>
            <ResumeButton {...useAnimation('left',40, '1.6')}>
                <ButtonText>Github</ButtonText>
                <Link href="https://github.com/haileychoi15" target="_blank">
                    <CircleButton color="green" backgroundColor="white" border={true} mainColor={mainColor}>
                        <MdArrowForward />
                    </CircleButton>
                </Link>
            </ResumeButton>
        </Container>
    );
}

export default Home;