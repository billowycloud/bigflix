import React from "react";
import styled, { keyframes } from "styled-components";
import { Rating } from "./Rating";

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
  height: 100%;
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
    }
  }
  &:not(:last-child) {
    margin-right: 0.3rem;
  }
`;

const SearchPoster = ({ id, title, imgUrl, rating, year }) => {
  return (
    <Block>
      <ImgWrapper>
        <Img
          src={
            imgUrl
              ? `https://image.tmdb.org/t/p/w500/${imgUrl}`
              : require("../../assets/noPoster.png")
          }
          alt={title}
        />
        <DetailBlock>
          <Title>{title}</Title>
          <Year>{year}</Year>
          <Rating rating={rating} />
        </DetailBlock>
      </ImgWrapper>
    </Block>
  );
};

export default SearchPoster;
