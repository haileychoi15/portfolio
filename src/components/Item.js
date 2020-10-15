import React from 'react';
import styled from "styled-components";
import { useAnimation } from '../hooks/UseAnimation';

const ItemBlock = styled.div`
  border-radius: 6px;
  width: 100%;
  padding: 20px;  
  color: #333;
  & + & {
    margin-top: 30px;
    margin-left: 0;
  }
  @media screen and (min-width: 768px) {
    min-width: 300px;
    width: 30%;
    & + & {
    margin-top: 0;
    margin-left: 100px;
    }
  }
`;

const ItemTitle = styled.strong`
  display: block;
  margin-bottom: 20px;
  font-size: 26px;
  font-weight: 400;
  color: #4fc08d;
`;

const ItemSubTitle = styled.div`
  font-size: 22px;
  font-weight: 400;
  color: #cacaca;
`;

const ItemDescription = styled.p`
  font-size: 18px;
  font-weight: 300;
  line-height: 1.4em;
  color: #333;
`;

function Item( { data, animationDirection } ) {

    const { subject, first, second } = data;

    return (
        <ItemBlock {...useAnimation(animationDirection)}>
            <ItemTitle>{subject}</ItemTitle>
            <ItemSubTitle>{first.title}</ItemSubTitle>
            <ItemDescription>{first.description}</ItemDescription>
            <ItemSubTitle>{second.title}</ItemSubTitle>
            <ItemDescription>{second.description}</ItemDescription>
        </ItemBlock>
    );
}

export default Item;