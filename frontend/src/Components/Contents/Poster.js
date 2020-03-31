import React from "react";
import styled from "styled-components";

const Block = styled.div``;
const Img = styled.div`
  background-image: url(${props => props.posterUrl});
  background-size: cover;
  background-position: center center;
  width: 200px;
  height: 300px;
`;
const Poster = ({ key, id, imgUrl }) => {
  return (
    <Block>
      <Img posterUrl={`https://image.tmdb.org/t/p/w500/${imgUrl}`} />
    </Block>
  );
};

export default Poster;
