import React from 'react';
import styled, { keyframes } from 'styled-components';
import backStar from '../../Images/backStar.png';
import fillStar from '../../Images/fillStar.png';
const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const DetailBlock = styled.div`
  width: 200px;
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
  &:not(:last-child) {
    margin-right: 0.3rem;
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

const RatingBlock = styled.div`
  display: flex;
`;

const Rating = styled.div`
  width: 100px;
  height: 25px;
  position: relative;
`;

const BackStar = styled.div`
  position: absolute;
  width: 100%;
  height: 25px;
  white-space: nowrap;
  display: flex;
  align-items: center;
`;

const FillStar = styled.div`
  position: absolute;
  width: ${props => props.rating * 10}%;
  height: 25px;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  align-items: center;
`;

const SImg = styled.img`
  width: 20px;
  margin: 0;
`;
const Score = styled.span`
  width: 20px;
  margin-left: 0.2rem;
  line-height: 25px;
  font-size: 1.2rem;
`;

const Poster = ({ id, title, imgUrl, rating, year, isMovie }) => {
  return (
    <Block>
      <Img posterUrl={`https://image.tmdb.org/t/p/w500/${imgUrl}`} />
      <DetailBlock>
        <Title>{title}</Title>
        <Year>{year}</Year>
        <RatingBlock>
          <Rating>
            <BackStar>
              <SImg src={backStar} />
              <SImg src={backStar} />
              <SImg src={backStar} />
              <SImg src={backStar} />
              <SImg src={backStar} />
            </BackStar>
            <FillStar rating={rating}>
              <SImg src={fillStar} />
              <SImg src={fillStar} />
              <SImg src={fillStar} />
              <SImg src={fillStar} />
              <SImg src={fillStar} />
            </FillStar>
          </Rating>
          <Score>{rating}</Score>
        </RatingBlock>
      </DetailBlock>
    </Block>
  );
};

export default Poster;
