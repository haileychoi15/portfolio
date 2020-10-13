import React from 'react';
import styled from 'styled-components';
import Category from './Category';
import Item from './Item';

const Container = styled.div`
  background-color: #fafafa;
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

function About() {

    const data = {
        0: {
            subject: 'SKILLSET',
            first: {
                title: 'Front-end',
                description: 'HTML, CSS, JavaScript, jQuery, ReactJS is the my best skillset.HTML, CSS, JavaScript, jQuery, ReactJS is the my best skillset.'
            },
            second: {
                title: 'Back-end',
                description: 'HTML, CSS, JavaScript, jQuery, ReactJS is the my best skillset.HTML, CSS, JavaScript, jQuery, ReactJS is the my best skillset.'
            }
        },
        1: {
            subject: 'EDUCATION',
            first: {
                title: '2015 - 2020',
                description: 'HTML, CSS, JavaScript, jQuery, ReactJS is the my best skillset.HTML, CSS, JavaScript, jQuery, ReactJS is the my best skillset.'
            },
            second: {
                title: '2020',
                description: 'HTML, CSS, JavaScript, jQuery, ReactJS is the my best skillset.HTML, CSS, JavaScript, jQuery, ReactJS is the my best skillset.'
            }
        }
    }

    return (
        <Container id="about">
            <Category name="About" color="white"></Category>
            <AboutBlock>
                <Item data={data[0]} />
                <Item data={data[1]} />
            </AboutBlock>
        </Container>
    );
}

export default About;