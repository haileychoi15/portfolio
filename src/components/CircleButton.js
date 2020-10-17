import React, {useState} from 'react';
import styled, { css } from 'styled-components';
import Contact from "./Contact";

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
  background-color: #333;
  transition: all 250ms ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  & .plus-icon {
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
  ${props => !props.popup && css`
     color: ${props.mainColor};
     background-color: #fff;
     border: 1px solid ${props.mainColor};
  `}
`;

function CircleButton({ children, popup, mainColor, ...rest}) {
    const [open, setOpen] = useState(false);
    const handleClick = () => popup && setOpen(!open);
    return (
        <>
            {popup && <Contact open={open} mainColor={mainColor} />}
            <ButtonBlock
                {...rest}
                onClick={handleClick}
                open={open}
                popup={popup}
                mainColor={mainColor}
            >
                {children}
            </ButtonBlock>
        </>
    );
}

CircleButton.defaultProps = {
    color: 'white',
    backgroundColor: 'black',
    border: false,
    popup: false
};

export default CircleButton;