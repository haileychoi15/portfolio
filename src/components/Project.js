import React from 'react';
import styled from 'styled-components';

const ProjectBlock = styled.div`
    position: relative; 
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; 
    padding-top: 62.5%; /* 8:5 Aspect Ratio */
    margin-bottom: 100px; // 모바일 프로젝트 높이 간격 !!!!
    @media screen and (min-width: 768px) {
      margin-bottom: 50px;
    }
    @media screen and (min-width: 1024px) {
      margin-bottom: 0;
    }
`;

const StyleBar = styled.div`
    position: absolute; 
    top: -25px; 
    left: 50%;
    display: flex;
    align-items: center;
    padding: 0 10px;
    width: 90%;
    height: 25px;
    border: 1px solid #e9e9e9;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    transform: translateX(-50%);
    @media screen and (min-width: 768px) {
      width: 80%;
    }
    @media screen and (min-width: 1024px) {
      width: 60%;
    }
`;

const StyleDot = styled.div`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: #e9e9e9;
  & + & {
    margin-left: 7px;
  }
`;

const ProjectImage = styled.div`
    position: absolute; 
    top: 0; 
    left: 50%;
    width: 90%;
    height: 90%;
    border: 1px solid #e9e9e9;
    border-top: none;
    transform: translateX(-50%);
    @media screen and (min-width: 768px) {
      width: 80%;
      height: 80%;
    }
    @media screen and (min-width: 1024px) {
      width: 60%;
      height: 60%;
    }
`;

const ProjectInfo = styled.div`
    width: 90%;
    min-height: 10%;
    position: absolute; 
    left: 50%; 
    bottom: 0;
    transform: translateX(-50%);
    @media screen and (min-width: 768px) {
      width: 80%;
      height: 20%;
    }
    @media screen and (min-width: 1024px) {
      width: 60%;
      height: 40%;
    }
`;

function Project () {
    return (
        <ProjectBlock>
            <StyleBar>
                <StyleDot />
                <StyleDot />
                <StyleDot />
            </StyleBar>
            <ProjectImage>Test</ProjectImage>
            <ProjectInfo></ProjectInfo>
        </ProjectBlock>
    );
}

export default Project;