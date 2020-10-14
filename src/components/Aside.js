import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaInstagram } from 'react-icons/fa'

const Container = styled.div`
  position: fixed;
  top: 50%;
  right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%);
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 5px 13px -3px rgba(50, 50, 93, 0.3);
  z-index: 1000;
`;

const IconBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 10px 12px;
  font-size: 30px;
`;

function Aside() {
    return (
        <Container>
            <ul>
                <li>
                    <a href="https://github.com/haileychoi15" target="_blank" rel="noopener noreferrer">
                        <IconBlock>
                            <FaGithub />
                        </IconBlock>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/haileychoi15" target="_blank" rel="noopener noreferrer">
                        <IconBlock>
                            <FaInstagram />
                        </IconBlock>
                    </a>
                </li>
            </ul>
        </Container>
    );
}

export default Aside;