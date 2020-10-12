import React from 'react';
import { MdLocalPhone, MdLocalPostOffice } from "react-icons/md";
import styled from 'styled-components';
import Category from './Category';

const Container = styled.div`
  width: 100%;
  color: #333;
  background-color: #eee;
  @media screen and (min-width: 768px) {
     height: 800px;
  }
`;

const ContactBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactCard = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  padding: 30px;
  margin: 0 10% 100px;
  border-radius: 8px;
  font-size: 22px;
  background-color: #fff;
  @media screen and (min-width: 768px) {
     width: 50%;
     padding: 50px 40px;
     margin: 0;
     font-size: 26px;
  }
`;

const PhotoBlock = styled.div`
  position: absolute;
  top: -30px;
  left: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: cornflowerblue;
  & img {
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: 768px) {
     top: -40px;
     left: 40px;
     width: 80px;
     height: 80px;
  }
`;

const InfoBlock = styled.div`
 
`;

const Info = styled.div`
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
`;

function Contact () {
    return (
        <Container id="contact">
            <Category name="Contact"></Category>
            <ContactBlock>
                <ContactCard>
                    <PhotoBlock>
                        <img src="../../public/profile.jpg" alt="최유영(Hailey Choi)" title="최유영(Hailey Choi)" />
                    </PhotoBlock>
                    <InfoBlock>
                        <dl>
                            <Info>
                                <dt aria-label="Email"><MdLocalPhone /></dt>
                                <dd>imdud0612@gmail.com</dd>
                            </Info>
                            <Info>
                                <dt aria-label="Tel"><MdLocalPostOffice /></dt>
                                <dd>+82 10-9686-6440</dd>
                            </Info>
                        </dl>
                    </InfoBlock>
                </ContactCard>
            </ContactBlock>
        </Container>
    );
}

export default Contact;