import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa'

const ProjectBlock = styled.div`
    position: relative; 
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; 
    padding-top: 55.4%; /* 8:5 Aspect Ratio => 62.5% */
    margin-bottom: 150px; // 프로젝트 간 세로 간격
    @media screen and (min-width: 768px) {
      margin-bottom: 120px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 90%;
    border: 1px solid #e9e9e9;
    border-top: none;
    background-color: #ffffff;
    transform: translateX(-50%);
    & img {
    width: 95%;
    height: 95%;
    }
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

const Dl = styled.dl`
   position: absolute;
   top: 20px;
   left: 0;
   width: 100%;
   display: flex;
   justify-content: space-between;
   margin: 0;
   @media screen and (min-width: 768px) {
      top: 30px;
   }
   @media screen and (min-width: 1024px) {
      top: 40px;
   }
`;

const InfoGroup = styled.div`
  &.github-group {
    position: relative;
  }
  & + & {
    margin-left: 40px;
  }
`;

const Title = styled.dt`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 600;
  color: rgb(252, 106, 101);
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Description = styled.dd`
  margin-left: 0;
  font-size: 18px;
  font-weight: 400;
  color: #333;
`;

const Link = styled.a`
  position: absolute;
  top: 25%;
  right: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  & .github-icon {
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: 768px) {
    top: 60%;
    left: 50%;
  }
`;


function Project ({ project, type, languages, github, image }) {
    const [mobile, setMobile] = useState(false);
    const handleResize = (width) => {
        if(width < 768) setMobile(true);
        else setMobile(false);
    }

    useEffect(() => {
        window.addEventListener('load', e => {
            handleResize(e.currentTarget.innerWidth);
        })
        window.addEventListener('resize', e => {
            handleResize(e.target.innerWidth);
        })
    },[])

    return (
        <ProjectBlock>
            <StyleBar>
                <StyleDot />
                <StyleDot />
                <StyleDot />
            </StyleBar>
            <ProjectImage>
                <img src={image} alt={project} />
            </ProjectImage>
            <ProjectInfo>
                <Dl>
                    <InfoGroup>
                        <Title>Project</Title>
                        <Description>{project}</Description>
                    </InfoGroup>
                    {!mobile &&
                    <>
                    <InfoGroup>
                        <Title>Type</Title>
                        <Description>{type}</Description>
                    </InfoGroup>
                    <InfoGroup>
                        <Title>Languages</Title>
                        <Description>{languages}</Description>
                    </InfoGroup>
                    </>
                    }
                    <InfoGroup className="github-group">
                        {!mobile &&
                        <Title>Github</Title>
                        }
                        <Description>
                            <Link href={github} target="_blank">
                                <FaGithub className="github-icon" />
                            </Link>
                        </Description>
                    </InfoGroup>
                </Dl>
            </ProjectInfo>
        </ProjectBlock>
    );
}

export default Project;