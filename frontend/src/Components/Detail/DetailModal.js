import React, { useState } from "react";
import styled, { css } from "styled-components";
import Loader from "../Loader";
import { Rating } from "../Contents/Rating";
import StyleButton from "../Button";
import closeIcon from "../../assets/close_white.png";
import Similar from "../Similar";
import Season from "../Season";
import ListCheck from "../ListCheck";
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

const BlackBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 21%;
  height: 100%;
  background: black;
  z-index: 101;
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

  height: 100%;
  z-index: 102;
`;

const Wrapper = styled.div`
  width: calc(100vw * 0.25);
  min-width: 30rem;
  z-index: 105;
`;

const Title = styled.h3`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 0.7rem;
`;

const SubInfo = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`;

const Item = styled.div`
  line-height: 1.1rem;
  font-size: 1rem;
  margin-right: 1rem;
  &:first-child {
    font-weight: bold;
    font-size: 1.1rem;
  }
  &:last-child {
    color: gray;
  }
`;

const Overview = styled.p`
  font-size: 0.9rem;
  line-height: 1.2rem;
  margin-top: 0.5rem;
  color: gray;
  margin-bottom: 0.5rem;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  z-index: 104;
  cursor: pointer;

  img {
    width: 40px;
    height: 40px;
    -webkit-transition: 0.3s;
    &:hover {
      -webkit-transform: scale(1.2);
    }
  }
`;

const ModalRouter = styled.div`
  z-index: 104;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  min-width: 1024px;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalItem = styled.div`
  height: 100%;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
  margin-left: 2rem;
  margin-right: 2rem;
  ${(props) =>
    props.current === 1 &&
    css`
      :first-child {
        border-bottom: 6px solid #c21f2a;
      }
    `};
  ${(props) =>
    props.current === 2 &&
    css`
      :nth-child(2) {
        border-bottom: 6px solid #c21f2a;
      }
    `};
  ${(props) =>
    props.current === 3 &&
    css`
      :last-child {
        border-bottom: 6px solid #c21f2a;
      }
    `};
  cursor: pointer;
`;

const Opacity = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(20, 20, 20, 0.8);
  z-index: 103;
`;

const DetailModal = ({ onClose, result, isMovie, loading, error }) => {
  const [router, setRouter] = useState(1);
  return loading ? (
    <Loader />
  ) : (
    <Block>
      <Content>
        {router === 1 && (
          <Info>
            <Wrapper>
              <Title>{result.title ? result.title : result.name}</Title>
              <SubInfo>
                <Item>
                  {result.release_date
                    ? result.release_date && result.release_date.substring(0, 4)
                    : result.first_air_date && result.first_air_date.substring(0, 4)}
                </Item>
                <Item>{result.runtime ? `${result.runtime}분` : ""}</Item>
                <Item>
                  {result.genres &&
                    result.genres.map((genre, index) =>
                      index === result.genres.length - 1 ? genre.name : `${genre.name} • `
                    )}
                </Item>
              </SubInfo>
              <Rating rating={result.vote_average} />
              <Overview>&nbsp;{result.overview}</Overview>
              <div>
                {result.videos.results.length !== 0 && (
                  <StyleButton
                    onClick={() => {
                      setRouter(4);
                    }}
                  >
                    ▶ 재생
                  </StyleButton>
                )}
                <StyleButton>
                  <ListCheck
                    movieInfo={result}
                    movieId={result.id}
                    userFrom={JSON.parse(localStorage.getItem("user"))._id}
                  />
                </StyleButton>
              </div>
            </Wrapper>
          </Info>
        )}
        {router === 2 && !isMovie && (
          <Opacity>
            <Season name={result.name} id={result.id} seasons={result.seasons} />
          </Opacity>
        )}
        {router === 3 && result && (
          <Opacity>
            <Similar
              id={result.id}
              title={isMovie ? result.title : result.name}
              isMovie={isMovie}
            />
          </Opacity>
        )}
        {router === 4 && result && (
          <Opacity>
            <iframe
              height="100%"
              width="100%"
              frameborder="0"
              src={`https://www.youtube.com/embed/${result.videos.results[0].key}?autoplay=1&amp;version=3&amp;hd=1&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;fs=1`}
              webkitallowfullscreen=""
              mozallowfullscreen=""
              allowfullscreen=""
              allow="autoplay; fullscreen"
              title={isMovie ? result.title : result.name}
            ></iframe>
          </Opacity>
        )}
        {router !== 4 && (
          <ModalRouter>
            <ModalItem
              onClick={() => {
                setRouter(1);
              }}
              current={router}
            >
              콘텐츠 정보
            </ModalItem>
            {!isMovie && (
              <ModalItem
                onClick={() => {
                  setRouter(2);
                }}
                current={router}
              >
                회차 정보
              </ModalItem>
            )}
            <ModalItem
              onClick={() => {
                setRouter(3);
              }}
              current={router}
            >
              비슷한 콘텐츠
            </ModalItem>
          </ModalRouter>
        )}
        <BlackBackground />
        <BackDrop
          imgUrl={
            result.backdrop_path
              ? `https://image.tmdb.org/t/p/original/${result.backdrop_path}`
              : require("../../assets/noBackdrop.png")
          }
        />
        <CloseButton onClick={onClose}>
          <img src={closeIcon} alt="close" />
        </CloseButton>
      </Content>
    </Block>
  );
};

export default DetailModal;
