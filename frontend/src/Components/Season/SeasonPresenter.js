import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import SeasonContainer from "./SeasonContainer";

const fadeIn = keyframes`
 from{
   opacity: 0;
 }
 to{
  opacity: 1;
 }
`;

const Block = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
`;

const Title = styled.h1`
  font-size: 2.3rem;
  font-weight: bold;
  position: absolute;
  top: -6rem;
  left: 1rem;
`;

const Button = styled.div`
  width: 7rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  background: black;
  border: 1px solid white;
  padding: 10px;
  ${(props) =>
    props.isOpen &&
    css`
      background: rgba(0, 0, 0, 0.2);
    `}
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  margin-bottom: 1rem;
  margin-left: 1rem;
`;
const Text = styled.div``;

const DownArrow = styled.div`
  margin-left: 1rem;
  width: 0px;
  height: 0px;
  border-top: 7px solid white;
  border-bottom: 7px solid none;
  border-right: 7px solid transparent;
  border-left: 7px solid transparent;
`;

const Wrapper = styled.div`
  z-index: 99;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(12, 12, 12, 0.9);
  top: 37px;
  left: 1rem;
  position: absolute;
  display: none;
  width: 7rem;
  ${(props) =>
    props.isOpen &&
    css`
      display: flex;
      flex-direction: column;
      animation: ${fadeIn} 0.5s ease-in-out;
    `}
`;

const Item = styled.div`
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const SeasonPresenter = ({ id, name, seasons }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [seasonNumber, setSeasonNumber] = useState(
    seasons && { name: seasons[0].name, number: seasons[0].season_number }
  );
  return (
    <Block>
      <Title>{name}</Title>
      <Button
        isOpen={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Text>{seasonNumber.name}</Text>
        <DownArrow />
      </Button>
      <Wrapper isOpen={isOpen}>
        {seasons &&
          seasons.map((content) => (
            <Item
              key={content.id}
              onClick={() => {
                setSeasonNumber({ name: content.name, number: content.season_number });
                if (isOpen) setIsOpen(false);
              }}
            >
              {content.name}
            </Item>
          ))}
      </Wrapper>
      <SeasonContainer id={id} seasonNumber={seasonNumber.number} />
    </Block>
  );
};

export default SeasonPresenter;
