import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100px;
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
        <Container>
            <Ul>
                <Li>Me</Li>
                <Li>Skills</Li>
                <Li>Portpolio</Li>
                <Li>Contact</Li>
            </Ul>
        </Container>
    );
}

export default Header;