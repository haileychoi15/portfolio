import React from 'react';
import { IoIosCheckmarkCircleOutline, IoIosCheckmarkCircle } from "react-icons/io";
import styled from 'styled-components';
import Category from './Category';

const Container = styled.div`
  @media screen and (min-width: 768px) {
    height: 800px;
  }
`;

const AboutBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 10% 100px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 100%;
    padding: 0;
  }
`;

const ItemBlock = styled.div`
  border-radius: 6px;
  color: #333;
  width: 100%;
  background-color: cornflowerblue;
  & + & {
    margin-top: 30px;
    margin-left: 0;
  }
  @media screen and (min-width: 768px) {
    min-width: 300px;
    width: 30%;
    & + & {
    margin-top: 0;
    margin-left: 100px;
    }
  }
`;

const ItemTitle = styled.strong`
  display: block;
  margin: 20px;
  font-size: 26px;
  font-weight: 500;
  color: rgb(252, 106, 101);
`;

const Ul = styled.ul`
  margin: 20px ;
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weiht: 500;
  & + & {
    margin-top: 10px;
  }
  & .check-icon {
    margin-right: 10px;
    font-size: 20px;
    color: #fff;
  }
`;

const Text = styled.span`
  min-width: 100px;
`;

function About() {

    const SkillsObject = {
        frontend: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'ReactJS'],
        backend: ['Java', 'Oracle', 'Firebase']
    }

    return (
        <Container id="about">
            <Category name="About" color="white"></Category>
            <AboutBlock>
                <ItemBlock>
                    <ItemTitle>Front-end</ItemTitle>
                    <Ul>
                        {SkillsObject.frontend.map(skill =>
                            <Li>
                                <Text>{skill}</Text>
                            </Li>
                        )}
                    </Ul>
                </ItemBlock>
                <ItemBlock>
                    <ItemTitle>Back-end</ItemTitle>
                    <Ul>
                        {SkillsObject.backend.map(skill =>
                            <Li>
                                <Text>{skill}</Text>
                            </Li>
                        )}
                    </Ul>
                </ItemBlock>
            </AboutBlock>
        </Container>
    );
}

export default About;