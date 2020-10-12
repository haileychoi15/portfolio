import React from 'react';
import styled from 'styled-components';

const ProjectBlock = styled.div`
  width: 80%;
  height: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 50px;
  background-color: #fff;
  transition: all 250ms ease-in-out;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.3);
  }
  @media screen and (min-width: 768px) {
     width: 47%;
  }
  @media screen and (min-width: 1200px) {
     width: 30%;
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 65%;
  background-color: #e7f5ff;
`;

const ProjectDescription = styled.div`
  width: 100%;
  height: 35%;
`;

function Project ({ title }) {
    return (
        <ProjectBlock>
            <ProjectImage></ProjectImage>
            <ProjectDescription>{title}</ProjectDescription>
        </ProjectBlock>
    );
}

export default Project;