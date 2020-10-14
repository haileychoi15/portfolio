import React from 'react';
import styled, { css } from 'styled-components';
import { MdRingVolume, MdEmail } from 'react-icons/md';

const Container = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 20px;
  border: #e3e3e3;
  border-radius: 6px;
  font-size: 16px;
  color: #333333;
  background-color: #eee;
  transition: all 150ms ease-in-out;
  opacity: 0;
  box-shadow: 0 15px 22px -4px rgba(50, 50, 50, 0.2);
  @media screen and (min-width: 768px) {
    top: 17px;
    right: 17px;
    padding: 30px;
    font-size: 20px;
  }
  ${props => props.open && css`
    opacity: 1;
  `}
`;

const ContactGroup = styled.div`
  display: flex;
  align-items: center;
  & + & {
    margin-top: 10px;
  }
  & dt {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & dd {
    margin-left: 20px;
  }
`;

const Link = styled.a`
  transition: all 150ms ease-in-out;
  &:hover {
    color: rgb(252, 106, 101);
  }
`;


function Contact ({ open }) {
    return (
        <Container open={open}>
            <dl>
                <ContactGroup>
                    <dt aria-label="Tel">
                        <MdRingVolume />
                    </dt>
                    <dd>
                        <Link href="tel:+82 10-9686-6440">+82 10-9686-6440</Link>
                    </dd>
                </ContactGroup>
                <ContactGroup>
                    <dt aria-label="Email">
                        <MdEmail />
                    </dt>
                    <dd>
                        <Link href="mailto:imdud0612@gmail.com">imdud0612@gmail.com</Link>
                    </dd>
                </ContactGroup>
            </dl>
        </Container>
    );
}

export default Contact;