import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 35px;
  height: 35px;
  border: 1px solid #4fc08d;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 400;
  color: #333333;
  background-color: #fff;
  transition: width 250ms ease-in-out;
  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 15px;
  }
  ${props => props.open && css`
    width: 280px;
    @media screen and (min-width: 768px) {
    width: 310px;
    }
  `}
`;
const Ul = styled.dl`
  display: flex;
  align-items: center;
  padding-left: 25px;
  width: 100%;
  height: 100%;
  opacity: 0;
  ${props => props.open && css`
    animation-name: appear;
    animation-duration: 1s;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
  `}
  @keyframes appear {
    0% {
      opacity: 0;
    }
    5% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  &:first-child::after{
    content: '/';
    margin: 0 5px;
  }
`;

const Link = styled.a`
  &:hover {
    color: #4fc08d;
  }
`;


function Contact ({ open }) {
    return (
        <Container open={open}>
            <Ul open={open}>
                <Li>
                    <Link href="https://www.linkedin.com/in/haileychoi15" target="_blank" title="Move to Hailey's linkedin profile">Linkedin</Link>
                </Li>
                <Li>
                    <Link href="mailto:imdud0612@gmail.com" title="Send email to this address">imdud0612@gmail.com</Link>
                </Li>
            </Ul>
        </Container>
    );
}

export default Contact;