import React from 'react';
import styled, {css} from "styled-components";
import { useAnimation } from '../hooks/UseAnimation';

const mainColor = css`
  ${({mainColor}) => css`
    color: ${mainColor};
  `}
`;

const ItemBlock = styled.div`
  border-radius: 6px;
  width: 100%;
  padding: 1rem 0 1.25rem 3.125rem;
  color: #333;
  & + & {
    margin-top: 1.875rem;
    margin-left: 0;
  }
  @media screen and (min-width: 768px) {
    min-width: 300px;
    width: 30%;
    & + & {
    margin-top: 0;
    margin-left: 6.25rem;
    }
  }
`;

const ItemTitle = styled.strong`
  display: block;
  margin-bottom: 1.25rem;
  font-size: 1.375rem;
  font-weight: 400;
  ${mainColor}
  @media screen and (min-width: 768px) {
    font-size: 1.625rem;
  }
`;

const ItemSubTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 400;
  color: #cacaca;
  @media screen and (min-width: 768px) {
    font-size: 1.375rem;
  }
`;

const ItemDescription = styled.p`
  margin: 0.625rem 0 1.25rem;
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.4em;
  color: #333;
  @media screen and (min-width: 768px) {
    margin: 1.125rem 0;
  }
`;

function Item( { data, animationDirection, mainColor } ) {

    const { subject, first, second } = data;

    return (
        <ItemBlock {...useAnimation(animationDirection, 40)}>
            <ItemTitle mainColor={mainColor}>{subject}</ItemTitle>
            <ItemSubTitle>{first.title}</ItemSubTitle>
            <ItemDescription>{first.description}</ItemDescription>
            <ItemSubTitle>{second.title}</ItemSubTitle>
            <ItemDescription>{second.description}</ItemDescription>
        </ItemBlock>
    );
}

export default Item;