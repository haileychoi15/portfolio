import React from 'react';
import styled from 'styled-components';
import Project from './Project';
import Category from './Category';
import { useMobile } from "../hooks/UseMobile";

const Container = styled.div`
  width: 100%;
  color: #333;
  background-color: #fff;
  @media screen and (min-width: 768px) {
     min-height: 100vh;
  }
`;

function Portfolio ({mainColor}) {
    const data = [{
        id: 'first',
        project: 'Hello Arabic',
        type: 'Arabic Dictionary and Wordbook',
        language: 'ReactJS & Firebase',
        github: 'https://github.com/haileychoi15/hello-arabic',
        image: '/portfolio/hello-arabic.png'
    },
    {
        id: 'second',
        project: 'Movie App',
        type: 'Movie Recommendation Service',
        language: 'ReactJS',
        github: 'https://github.com/haileychoi15/movie-app',
        image: '/portfolio/movie-app.png'
    },
    {
        id: 'third',
        project: 'Paint Board',
        type: 'Experiments',
        language: 'JavaScript',
        github: 'https://github.com/haileychoi15/PaintJS',
        image: '/portfolio/paint-js.png'
    },
    {
        id: 'fourth',
        project: 'Ticket24',
        type: 'Performance Booking Service',
        language: 'JavaScript',
        github: 'https://github.com/haileychoi15/ticket24',
        image: 'https://user-images.githubusercontent.com/60546778/91707600-01cf5c80-ebbb-11ea-89cc-7e381bb864df.png'
    }]
    const mobile = useMobile();
    return (
        <Container>
            {mobile && <Category name="portfolio" />}
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        <Project id={item.id}
                                 project={item.project}
                                 type={item.type}
                                 languages={item.language}
                                 github={item.github}
                                 image={item.image}
                                 mainColor={mainColor}
                        />
                    </li>
                ))}
            </ul>
        </Container>
    );
}

export default Portfolio;