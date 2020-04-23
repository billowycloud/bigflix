import React from "react";
import styled from "styled-components";

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
const Button = styled.div`
  font-weight: bold;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  height: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  display: inline-block;
  background: rgba(23, 23, 23, 0.3);
  border-radius: 5px;
  cursor: pointer;
  -webkit-transition: 0.3s;

  &:hover {
    -webkit-transform: scale(1.1);
    color: black;
    background: #e6e6e6;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  }
  & + & {
    margin-left: 1.3rem;
  }
`;

const TopSection = ({ result }) => {
  return (
    <Block>
      <BackDrop imageUrl={result.backdrop_path} />
      <Info>
        <Title>{result.title || result.name}</Title>
        <Overview>&nbsp;{result.overview}</Overview>
        <Button>▶ 재생</Button>
        <Button>ⓘ 상세 정보</Button>
      </Info>
    </Block>
  );
};

export default TopSection;
