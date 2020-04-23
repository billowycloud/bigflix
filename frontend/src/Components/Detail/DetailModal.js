import React from "react";
import styled from "styled-components";
import Loader from "../Loader";
import { Rating } from "../Contents/Rating";

const Block = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  background: black;
  width: 100%;
  height: calc(100vh - 20rem);
  position: relative;
`;

const BackDrop = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 1) 10%,
      rgba(0, 0, 0, 0.75) 25%,
      rgba(0, 0, 0, 0.5) 50%,
      rgba(0, 0, 0, 0) 75%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${(props) => props.imgUrl});
  background-position: center center;
  background-size: cover;
  width: 80%;
  height: 100%;
  z-index: 100;
`;

const Info = styled.div`
  padding: 3rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 21%;
  height: 100%;
  background: black;
  z-index: 101;
`;

const Wrapper = styled.div``;

const Title = styled.h3`
  width: 35rem;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 0.7rem;
`;

const SubInfo = styled.div`
  width: 35rem;
  display: flex;
  margin-bottom: 0.5rem;
`;

const Item = styled.div`
  font-size: 1rem;
  margin-right: 1rem;
`;

const Overview = styled.p`
  width: 35rem;
  font-size: 0.9rem;
  line-height: 1.2rem;
  margin-top: 0.5rem;
`;

const CloseButton = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 2rem;
  right: 2rem;
  z-index: 102;
`;

const DetailModal = ({ onClose, result, loading, error }) => {
  return loading ? (
    <Loader />
  ) : (
    <Block>
      <Content>
        <Info>
          <Wrapper>
            <Title>{result.title ? result.title : result.name}</Title>
            <SubInfo>
              <Item>
                {result.release_date
                  ? result.release_date && result.release_date.substring(0, 4)
                  : result.first_air_date &&
                    result.first_air_date.substring(0, 4)}
              </Item>
              <Item>{result.runtime ? `${result.runtime}분` : ""}</Item>
              <Item>
                {result.genres &&
                  result.genres.map((genre, index) =>
                    index === result.genres.length - 1
                      ? genre.name
                      : `${genre.name} • `
                  )}
              </Item>
            </SubInfo>
            <Rating rating={result.vote_average} />
            <Overview>&nbsp;{result.overview}</Overview>
          </Wrapper>
        </Info>
        <BackDrop
          imgUrl={
            result.backdrop_path
              ? `https://image.tmdb.org/t/p/original/${result.backdrop_path}`
              : require("../../assets/noPoster.png")
          }
        />
        <CloseButton onClick={onClose}>닫기</CloseButton>
      </Content>
    </Block>
  );
};

export default DetailModal;
