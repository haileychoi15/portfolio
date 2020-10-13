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

function Portpolio () {
    return (
        <Container id="portpolio">
            <Category name="Portpolio" />
            <div>
                <Project />
                <Project />
                <Project />
            </div>
        </Container>
    );
}

export default Portpolio;