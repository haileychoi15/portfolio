import React from 'react';
import styled, { css } from 'styled-components';
import { AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai';

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: none;
  width: 100px;
  height: 35px;
  border: 1px solid #4fc08d;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 400;
  color: #333333;
  background-color: #fff;
  transition: opacity 50ms ease-in-out, width 250ms ease-in-out;
  opacity: 1;
  @media screen and (min-width: 768px) {
    height: 50px;
  }
  ${props => props.open && css`
    display: inline-block;
    opacity: 1;
    width: 240px;
    @media screen and (min-width: 768px) {
    width: 300px;
    }
  `}
`;

const Dl = styled.dl`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 25px;
  width: 100%;
  height: 100%;
`;

const ContactGroup = styled.div`
  display: flex;
  align-items: center;
  &.email-contact {
    display: none;
  }
  @media screen and (min-width: 768px) {
      & + & {
        margin-top: 4px;
      }
      &.email-contact {
        display: flex;
      }
  }
`;

const Dt = styled.dt`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`;

const Link = styled.a`
  transition: all 150ms ease-in-out;
  &:hover {
    color: #4fc08d;
  }
`;


function Contact ({ open }) {
    return (
        <Container open={open}>
            <Dl>
                <ContactGroup className="email-contact">
                    <Dt aria-label="Tel">
                        <AiOutlineLinkedin />
                    </Dt>
                    <dd>
                        <Link href="tel:+82 10-9686-6440">Linkedin</Link>
                    </dd>
                </ContactGroup>
                <ContactGroup>
                    <Dt aria-label="Email">
                        <AiOutlineMail />
                    </Dt>
                    <dd>
                        <Link href="mailto:imdud0612@gmail.com">imdud0612@gmail.com</Link>
                    </dd>
                </ContactGroup>
            </Dl>
        </Container>
    );
}

export default Contact;