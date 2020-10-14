import React, {useState} from 'react';
import styled, { css } from 'styled-components';
import Contact from "./Contact";

const backgroundColor = css`
  ${props => css`
    background-color: ${style.color[props.color]};
  `}
`;

const ButtonBlock = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  padding: 0;
  font-size: 20px;
  color: #fff;
  transition: all 250ms ease-in-out;
  &:hover {
    box-shadow: 0 5px 8px -2px rgba(50, 50, 93, 0.5);
  }
  & .button-icon {
    transition: all 150ms ease-in-out;
    ${props => props.open && css`
    transform: rotate(45deg);
  `}
  }
  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 24px;
  }
  ${backgroundColor}
`;

function CircleButton({ children, color }) {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        if(color === 'black') setOpen(!open);
    }
    return (
        <>
            <Contact open={open} />
            <ButtonBlock color={color} onClick={handleClick} open={open}>
                {children}
            </ButtonBlock>
        </>
    );
}

const style = {
    color: {
        default: 'rgb(252, 106, 101)',
        black: '#333'
    }
}

CircleButton.defaultProps = {
    color: 'default'
};

export default CircleButton;