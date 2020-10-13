import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
  }
`;

const Ul = styled.ul`
  font-size: 24px;
  font-weight: 900;
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
    transform: translateX(-10px);
  }
`;

function Header () {
    return (
        <Container id="header">
            <Ul>
                <Li>
                    <Link href="#header">Me</Link>
                </Li>
                <Li>
                    <Link href="#skills">Skills</Link>
                </Li>
                <Li>
                    <Link href="#portpolio">Portpolio</Link>
                </Li>
                <Li>
                    <Link href="#contact">Contact</Link>
                </Li>
            </Ul>
        </Container>
    );
}

export default Header;