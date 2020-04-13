import React from "react";
import styled from "styled-components";
import backStar from "../../assets/backStar.png";
import fillStar from "../../assets/fillStar.png";

const RatingBlock = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
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

export const Rating = ({ rating }) => {
  return (
    <RatingBlock>
      <Wrapper>
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
      </Wrapper>
      <Score>{rating}</Score>
    </RatingBlock>
  );
};
