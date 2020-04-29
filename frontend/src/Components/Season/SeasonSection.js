import React from "react";
import styled from "styled-components";
const Block = styled.div`
  display: flex;
`;
const Episode = styled.div`
  margin-right: 1rem;
`;

const Img = styled.img`
  width: 20rem;
`;

const Overview = styled.div``;

const SeasonSection = ({ result }) => {
  return (
    <Block>
      {result &&
        result.map((content) => (
          <Episode key={content.id}>
            <Img
              src={
                content.still_path !== null
                  ? `https://image.tmdb.org/t/p/w500/${content.still_path}`
                  : require("../../assets/noBackdrop.png")
              }
            />
            <Overview>{content.overview}</Overview>
          </Episode>
        ))}
    </Block>
  );
};

export default SeasonSection;
