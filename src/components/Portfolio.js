import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Project from './Project';
import Category from './Category';
import Aside from "./Aside";

const Container = styled.div`
  width: 100%;
  color: #333;
  background-color: #fff;
  @media screen and (min-width: 768px) {
     min-height: 800px;
  }
`;

function Portfolio () {
    // onScroll event 사용하는 것으로 바꾸기
    const [scroll, setScroll] = useState(false);
    const handleScroll = () => {
        window.scrollY > 1000 ? setScroll(true) : setScroll(false);
        console.log(scroll);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return window.removeEventListener('scroll', handleScroll);
    },[]);

    return (
        <Container id="portpolio">
            {scroll && <Aside />}
            <Category name="Portpolio" />
            <div>
                <Project id="first"
                    project="Paint Board"
                    type="Experiments"
                    languages="JavaScript"
                    github="https://github.com/haileychoi15/PaintJS"
                    image="/paint-js.png" />
                <Project id="second"
                    project="Movie App"
                    type="Movie Recommendation Service"
                    languages="ReactJS"
                    github="https://github.com/haileychoi15/movie-app"
                    image="/movie-app.png" />
                <Project id="third"
                    project="Ticket24"
                    type="Performance Booking Service"
                    languages="JavaScript"
                    github="https://github.com/haileychoi15/ticket24"
                    image="https://user-images.githubusercontent.com/60546778/91707600-01cf5c80-ebbb-11ea-89cc-7e381bb864df.png" />
            </div>
        </Container>
    );
}

export default Portfolio;