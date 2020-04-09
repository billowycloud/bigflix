import React from 'react';
import styled, { keyframes } from 'styled-components';
import backStar from '../../assets/backStar.png';
import fillStar from '../../assets/fillStar.png';

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const DetailBlock = styled.div`
  overflow: hidden;
  opacity: 0;
  position: absolute;
  bottom: 1rem;
  left: 0;
  padding: 2rem;
  width: 100%;
`;

const Img = styled.img`
  height: 80%;
  transition: width 0.5s, height 0.5s;
  -webkit-transition: width 0.5s, height 0.5s;
`;

const Title = styled.h3`
  width: 100%;
  font-weight: bold;
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  white-space: normal;
  line-height: 1.4rem;
`;

const Year = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
`;

const ImgWrapper = styled.div`
  position: relative;
  height: 27rem;
  display: flex;
  align-items: center;
`;

const Block = styled.div`
  &:hover {
    ${DetailBlock} {
      opacity: 1;
      animation: ${FadeIn} 0.8s ease-in-out;
    }
    ${Img} {
      opacity: 0.3;
      height: 100%;
    }
  }
  &:not(:last-child) {
    margin-right: 0.3rem;
  }
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
  width: ${(props) => props.rating * 10}%;
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

const Poster = ({ id, title, imgUrl, rating, year }) => {
  return (
    <Block>
      <ImgWrapper>
        <Img
          src={
            imgUrl
              ? `https://image.tmdb.org/t/p/w500/${imgUrl}`
              : require('../../assets/noPoster.png')
          }
          alt={title}
        />
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
      </ImgWrapper>
    </Block>
  );
};

export default Poster;
