import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
  }
`;

const Ul = styled.ul`
  font-size: 20px;
  font-weight: 900;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

const Li = styled.li`
  & + & {
    margin-top: 10px;
  }
`;

const Link = styled.a`
    display: inline-block;
    transition: all 250ms ease-in-out;
  &:hover {
    transform: translateX(-5px);
  }
  @media screen and (min-width: 768px) {
    &:hover {
      transform: translateX(-10px);
    }
  }
`;

function Header () {
    return (
        <Container id="header">
            <Ul>
                <Li>
                    <Link href="#home">Home</Link>
                </Li>
                <Li>
                    <Link href="#about">About</Link>
                </Li>
                <Li>
                    <Link href="#portpolio">Portpolio</Link>
                </Li>
            </Ul>
        </Container>
    );
}

export default Header;