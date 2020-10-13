import React from 'react';
import { IoIosCheckmarkCircleOutline, IoIosCheckmarkCircle } from "react-icons/io";
import styled from 'styled-components';
import Category from './Category';

const Container = styled.div`
  color: #fff;
  background-color: #ee5544;
  @media screen and (min-width: 768px) {
    height: 800px;
  }
`;

const SkillsBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 10% 100px;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

const Skill = styled.div`
  border-radius: 6px;
  color: #333;
  background-color: #eee;
  width: 100%;
  & + & {
    margin-top: 30px;
    margin-left: 0;
  }
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`;

const SkillTitle = styled.strong`
  display: block;
  margin: 20px;
  font-size: 30px;
  font-weight: 900;
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
    color: #ee5544;
  }
`;

function Skills() {
    return (
        <Container id="skills">
            <Category name="Skills" color="white"></Category>
            <SkillsBlock>
                <Skill>
                    <SkillTitle>Front-end</SkillTitle>
                    <Ul>
                        <Li><IoIosCheckmarkCircle className="check-icon" />HTML</Li>
                        <Li><IoIosCheckmarkCircle className="check-icon" />CSS</Li>
                        <Li><IoIosCheckmarkCircle className="check-icon" />JavaScript</Li>
                        <Li><IoIosCheckmarkCircle className="check-icon" />jQuery</Li>
                        <Li><IoIosCheckmarkCircle className="check-icon" />ReactJS</Li>
                    </Ul>
                </Skill>
                <Skill>
                    <SkillTitle>Back-end</SkillTitle>
                    <Ul>
                        <Li><IoIosCheckmarkCircle className="check-icon" />Java</Li>
                        <Li><IoIosCheckmarkCircle className="check-icon" />Oracle</Li>
                        <Li><IoIosCheckmarkCircle className="check-icon" />Firebase</Li>
                    </Ul>
                </Skill>
            </SkillsBlock>
        </Container>
    );
}

export default Skills;