import React from 'react';
import styled from 'styled-components';
import { AiOutlineHome } from 'react-icons/ai'

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
  & .menu-icon {
    font-size: 20px;
  }
  &:hover {
    color: #4fc08d;
  }
`;

function Aside() {
    return (
        <Container>
            <ul>
                <Li>
                    <Link href="#home">
                        <AiOutlineHome className="menu-icon" />
                    </Link>
                </Li>
                <Li>
                    <Link href="#first">01</Link>
                </Li>
                <Li>
                    <Link href="#second">02</Link>
                </Li>
                <Li>
                    <Link href="#third">03</Link>
                </Li>
            </ul>
        </Container>
    );
}

export default Aside;