import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
  }
`;

const Ul = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 20px;
  font-weight: 900;
`;

const Li = styled.li`
  padding: 40px 20px;
  &:last-child {
    margin-right: 30px;
  }
`;

function Header () {
    return (
        <Container id="header">
            <Ul>
                <Li>
                    <a href="#header">Me</a>
                </Li>
                <Li>
                    <a href="#skills">Skills</a>
                </Li>
                <Li>
                    <a href="#portpolio">Portpolio</a>
                </Li>
                <Li>
                    <a href="#contact">Contact</a>
                </Li>
            </Ul>
        </Container>
    );
}

export default Header;