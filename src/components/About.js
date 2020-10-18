import React from 'react';
import styled from 'styled-components';
import Category from './Category';
import Item from './Item';
import { useMobile } from "../hooks/UseMobile";
import { useLocation } from "../hooks/UseLocation";

const Container = styled.div`
  width: 100vw;
  background-color: #fafafa;
`;

const AboutBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 0 10% 100px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 100%;
    padding: 100px 0 80px;
    margin-bottom: 120px;
  }
`;

function About({mainColor}) {
    const mobile = useMobile();
    const data = {
        0: {
            subject: 'SKILLSET',
            first: {
                title: 'Front-end',
                description: 'HTML5, CSS3, SASS (SCSS), Styled-Components, JavaScript/ES6, jQuery, ReactJS, Firebase, Git, Github'
            },
            second: {
                title: 'Back-end',
                description: 'Java, JSP/Servlet, Oracle, Git, Github'
            }
        },
        1: {
            subject: 'EDUCATION',
            first: {
                title: '2015 - 2020',
                description: 'Bachelor of Arts in Arabic, Bachelor of Arts in Economics at HUFS (Hankuk University of Foreign Studies), Seoul'
            },
            second: {
                title: '2020',
                description: 'Self-taught'
            }
        }
    }

    return (
        <Container id="about" {...useLocation('home')}>
            {mobile && <Category name="About" />}
            <AboutBlock>
                <Item data={data[0]} animationDirection="right" mainColor={mainColor} />
                <Item data={data[1]} animationDirection="left" mainColor={mainColor} />
            </AboutBlock>
        </Container>
    );
}

export default About;