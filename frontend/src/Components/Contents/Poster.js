import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { Rating } from "./Rating";
import ModalPortal from "../../lib/ModalPortal";
import DetailContainer from "../Detail/DetailContainer";

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
  ${(props) =>
    props.isGrid
      ? css`
          width: 15.3rem;
          height: 23rem;
        `
      : css`
          height: 80%;
        `}
  transition: width 0.5s, height 0.5s;
  -webkit-transition: width 0.5s, height 0.5s;
`;

const Title = styled.h3`
  width: 100%;
  font-weight: bold;
  font-size: ${(props) => (props.isGrid ? "1rem" : "1.3rem")};
  margin-bottom: 0.8rem;
  white-space: normal;
  line-height: 1.4rem;
`;

const Year = styled.p`
  font-size: ${(props) => (props.isGrid ? "0.9rem" : "1.2rem")};
  margin-bottom: 0.3rem;
`;

const ImgWrapper = styled.div`
  position: relative;
  height: ${(props) => (props.isGrid ? "23rem" : "27rem")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Block = styled.div`
  cursor: pointer;
  &:hover {
    ${DetailBlock} {
      opacity: 1;
      animation: ${FadeIn} 0.8s ease-in-out;
    }
    ${Img} {
      opacity: 0.3;
      ${(props) =>
        !props.isGrid &&
        css`
          height: 100%;
        `}
    }
  }
  &:not(:last-child) {
    margin-right: 0.3rem;
  }
`;

const Poster = ({ id, title, imgUrl, rating, year, isGrid, isMovie }) => {
  const [modal, setModal] = useState(false);
  const handleOpenModal = () => {
    setModal(true);
  };
  const handleCloseModal = () => {
    setModal(false);
  };
  return (
    <>
      <Block onClick={handleOpenModal} isGrid={isGrid}>
        <ImgWrapper isGrid={isGrid}>
          <Img
            src={
              imgUrl
                ? `https://image.tmdb.org/t/p/w500/${imgUrl}`
                : require("../../assets/noPoster.png")
            }
            alt={title}
            isGrid={isGrid}
          />
          <DetailBlock isGrid={isGrid}>
            <Title isGrid={isGrid}>{title}</Title>
            <Year isGrid={isGrid}>{year}</Year>
            <Rating rating={rating} />
          </DetailBlock>
        </ImgWrapper>
      </Block>
      {modal && (
        <ModalPortal>
          <DetailContainer id={id} isMovie={isMovie} onClose={handleCloseModal} />
        </ModalPortal>
      )}
    </>
  );
};

export default Poster;
