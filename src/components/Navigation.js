import React from 'react';
import styled from 'styled-components';
import { GoHome } from 'react-icons/go';
import { useAnimation } from "../hooks/UseAnimation";

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%);
  border-radius: 6px;
  background: none;
  z-index: 1000;
`;

const Li = styled.li`
  & + & {
    margin-top: 30px;
  }
`;

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  &.active {
    color: #4fc08d;
  }
  & .menu-icon {
    font-size: 20px;
  }
  &:hover {
    color: #4fc08d;
  }
`;

function Navigation() {
    return (
        <Container>
            <ul>
                <Li {...useAnimation('up', '1','1.6')}>
                    <Link href="#home" className="nav-item home">
                        <GoHome className="menu-icon" />
                    </Link>
                </Li>
                <Li {...useAnimation('up', '1','1.8')}>
                    <Link href="#first" className="nav-item first">01</Link>
                </Li>
                <Li {...useAnimation('up', '1','2')}>
                    <Link href="#second" className="nav-item second">02</Link>
                </Li>
                <Li {...useAnimation('up', '1','2.2')}>
                    <Link href="#third" className="nav-item third">03</Link>
                </Li>
            </ul>
        </Container>
    );
}

export default Navigation;