import React from 'react';
import styled from 'styled-components';
import Category from './Category';
import Item from './Item';
import { useMobile } from "../hooks/UseMobile";
import { useLocation } from "../hooks/UseLocation";

const Container = styled.div`
  background-color: #fafafa;
  @media screen and (min-width: 768px) {
    
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
    padding: 100px 0 80px;
    margin-bottom: 120px;
  }
`;

function About() {
    const mobile = useMobile();
    const data = {
        0: {
            subject: 'SKILLSET',
            first: {
                title: 'Front-end',
                description: 'HTML, CSS, SASS, Styled-component, JavaScript/ES6, jQuery, ReactJS, Git'
            },
            second: {
                title: 'Back-end',
                description: 'Java, Oracle, JSP/Servlet, Git'
            }
        },
        1: {
            subject: 'EDUCATION',
            first: {
                title: '2015 - 2020',
                description: 'Bacheor of Arts in Arabic and Economics at Hankuk University of Forieng Studies'
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
                <Item data={data[0]} animationDirection="right" />
                <Item data={data[1]} animationDirection="left" />
            </AboutBlock>
        </Container>
    );
}

export default About;