import React from 'react';
import styled from 'styled-components';
import Project from './Project';
import Category from './Category';

const Container = styled.div`
  width: 100%;
  color: #333;
  background-color: #fff;
  @media screen and (min-width: 768px) {
     min-height: 800px;
  }
`;

const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
  @media screen and (min-width: 768px) {
     justify-content: space-between;
     padding: 0 5% 50px;
  }
  @media screen and (min-width: 1200px) {
     padding: 0 4% 50px;
  }
`;

function Portpolio () {
    return (
        <Container id="portpolio">
            <Category name="Portpolio" />
            <Projects>
                <Project title="project1" />
                <Project title="project2" />
                <Project title="project3" />
                <Project title="project4" />
            </Projects>
        </Container>
    );
}

export default Portpolio;