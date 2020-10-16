import React, {useState} from 'react';
import styled, { css } from 'styled-components';
import Contact from "./Contact";

const colorStyles = css`
  ${({color, backgroundColor}) => css`
    color: ${style.color[color]};
    background-color: ${style.backgroundColor[backgroundColor]};
    ${props => props.border && css`
        border: 1px solid ${style.color[color]};
    `}
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
    transform: scale(1.05);
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
  ${colorStyles}
`;

function CircleButton({ children, popup, ...rest}) {
    const [open, setOpen] = useState(false);
    const handleClick = () => popup && setOpen(!open);
    return (
        <>
            {popup && <Contact open={open} />}
            <ButtonBlock
                {...rest}
                onClick={handleClick}
                open={open}
            >
                {children}
            </ButtonBlock>
        </>
    );
}

const style = {
    color: {
        white: '#fff',
        green: '#4fc08d'
    },
    backgroundColor: {
        black: '#333',
        white: '#fff'
    }
}

CircleButton.defaultProps = {
    color: 'white',
    backgroundColor: 'black',
    border: false,
    popup: false
};

export default CircleButton;