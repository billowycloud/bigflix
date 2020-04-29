import React, { useState } from "react";
import styled from "styled-components";
import StyleButton from "../Button";
import ModalPortal from "../../lib/ModalPortal";
import DetailContainer from "../Detail/DetailContainer";

const Block = styled.div`
  position: relative;
`;
const BackDrop = styled.div`
  background: url(${(props) => `https://image.tmdb.org/t/p/original/${props.imageUrl}`});
  background-position: center center;
  background-size: cover;
  height: 45rem;
`;
const Info = styled.div`
  position: absolute;
  width: calc(100vw * 0.5);
  min-width: 850px;
  bottom: 15rem;
  padding-left: 3rem;
`;
const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 3px 3px 4px rgb(0, 0, 0);
`;
const Overview = styled.p`
  font-size: 1rem;
  line-height: 1.3rem;
  width: 35rem;
  text-shadow: 1px 1px 2px rgb(0, 0, 0);
  margin-bottom: 1rem;
`;

const TopSection = ({ result, isMovie }) => {
  const [modal, setModal] = useState(false);

  const handleOpenModal = () => {
    setModal(true);
  };
  const handleCloseModal = () => {
    setModal(false);
  };
  return (
    <>
      <Block>
        <BackDrop imageUrl={result.backdrop_path} />
        <Info>
          <Title>{result.title || result.name}</Title>
          <Overview>&nbsp;{result.overview}</Overview>
          <StyleButton>▶ 재생</StyleButton>
          <StyleButton onClick={handleOpenModal}>ⓘ 상세 정보</StyleButton>
        </Info>
      </Block>
      {modal && (
        <ModalPortal>
          <DetailContainer id={result.id} isMovie={isMovie} onClose={handleCloseModal} />
        </ModalPortal>
      )}
    </>
  );
};

export default TopSection;
