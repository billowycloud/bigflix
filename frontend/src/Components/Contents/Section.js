import React from "react";
import styled, { css } from "styled-components";
import btnLeft from "../../assets/btn_left.png";
import btnRight from "../../assets/btn_right.png";

const Block = styled.div`
  margin-bottom: 3rem;
  position: relative;
`;
const Wrapper = styled.div`
  position: relative;
`;
const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
`;

const Contents = styled.div`
  display: flex;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
`;
const HideScroll = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 16px;
  background: rgba(20, 20, 20, 1);
  z-index: 100;
`;
const BtnImage = styled.img`
  width: 0px;
`;
const Button = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${props =>
    props.isLeft
      ? css`
          left: 0;
          background: linear-gradient(to right, rgb(26, 26, 26), transparent);
        `
      : css`
          right: 0;
          background: linear-gradient(to left, rgb(26, 26, 26), transparent);
        `}

  &:hover {
    background: rgba(26, 26, 26, 0.7);
    transition: background 0.5s;

    ${BtnImage} {
      width: 30px;
      transition: width 0.3s;
    }
  }
`;

const Section = ({ title, children }) => {
  return (
    <Block>
      <Title>{title}</Title>
      <Wrapper>
        <Contents>{children}</Contents>
        <HideScroll />
        <Button isLeft={true}>
          <BtnImage src={btnLeft} />
        </Button>
        <Button isLeft={false}>
          <BtnImage src={btnRight} />
        </Button>
      </Wrapper>
    </Block>
  );
};

export default Section;
