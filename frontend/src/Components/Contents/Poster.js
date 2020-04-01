import React from "react";
import styled, { keyframes } from "styled-components";

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const DetailBlock = styled.div`
  width: 180px;
  overflow: hidden;
  opacity: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 20px;
`;

const Img = styled.div`
  background-image: url(${props => props.posterUrl});
  background-size: cover;
  background-position: center center;
  width: 200px;
  height: 300px;
`;
const Block = styled.div`
  position: relative;
  &:hover {
    ${DetailBlock} {
      opacity: 1;
      animation: ${FadeIn} 0.3s ease-in-out;
    }
    ${Img} {
      opacity: 0.3;
    }
  }
`;
const Title = styled.h3`
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
`;
const Year = styled.p`
  font-size: 1rem;
  margin-bottom: 0.3rem;
`;

const Rating = styled.div`
  width: 70%;
  height: 20px;
  border-radius: 25px;
  position: relative;
  .backStar {
    width: 100%;
    height: 20px;
    position: absolute;
    background: gray;
  }
  .fillStar {
    width: ${props => props.rating * 10}%;
    height: 20px;
    position: absolute;
    background: yellow;
  }
`;

const Poster = ({ id, title, imgUrl, rating, year, isMovie }) => {
  return (
    <Block>
      <Img posterUrl={`https://image.tmdb.org/t/p/w500/${imgUrl}`} />
      <DetailBlock>
        <Title>{title}</Title>
        <Year>{year}</Year>
        <Rating rating={rating}>
          <div className="backStar" />
          <div className="fillStar" />
        </Rating>
      </DetailBlock>
    </Block>
  );
};

export default Poster;
