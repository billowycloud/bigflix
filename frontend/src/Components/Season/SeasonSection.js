import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import btnLeft from "../../assets/btn_left.png";
import btnRight from "../../assets/btn_right.png";

/* 스크롤 애니메이션 */
const ANIM_DURATION = 300;
const FRAME_TIME = 10;

const Wrapper = styled.div`
  position: relative;
`;

const Block = styled.div`
  display: flex;
  overflow-x: hidden;
  overflow-y: hidden;
`;
const Episode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:last-child) {
    margin-right: 1rem;
  }
  width: 300px;
`;

const Img = styled.div`
  cursor: pointer;
  z-index: 97;
  background: url(${(props) => props.imgUrl});
  background-position: center center;
  background-size: cover;
  width: 300px;
  height: 170px;
  position: relative;
  margin-bottom: 5px;
`;

const Overview = styled.div`
  color: gray;
  line-height: 1.2rem;
  font-size: 0.9rem;
  width: 280px;
`;
const Number = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgb(0, 0, 0);
`;
const BtnImage = styled.img`
  width: 0px;
`;
const Button = styled.div`
  z-index: 110;
  position: absolute;
  top: 0;
  height: 170px;
  width: 3.3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  ${(props) =>
    props.isLeft
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `}
        ${(props) =>
          props.isLeft &&
          props.isHideLeft &&
          css`
            display: none;
          `}
    ${(props) =>
      !props.isLeft &&
      props.isHideRight &&
      css`
        display: none;
      `}
  &:hover {
    background: rgba(26, 26, 26, 0.6);
    transition: background 0.5s;

    ${BtnImage} {
      width: 2rem;
      transition: width 0.3s;
    }
  }
`;

const SeasonSection = ({ result }) => {
  const SliderRef = useRef(null);
  const [itemScroll, setItemScroll] = useState(0);
  const [isHideLeft, setIsHideLeft] = useState(true);
  const [isHideRight, setIsHideRight] = useState(false);

  const getPageSize = () => {
    return SliderRef.current.offsetWidth;
  };

  const getRecorrectScrollByProgress = (stepSize, pageSize, scrolled) => {
    const progress = scrolled / pageSize;
    if (progress > 0.98) {
      return Math.ceil(stepSize * 0.02);
    } else if (progress > 0.96) {
      return Math.ceil(stepSize * 0.06);
    } else if (progress > 0.93) {
      return Math.ceil(stepSize * 0.12);
    } else if (progress > 0.9) {
      return Math.ceil(stepSize * 0.2);
    } else if (progress > 0.8) {
      return Math.ceil(stepSize * 0.4);
    } else if (progress > 0.7) {
      return Math.ceil(stepSize * 0.6);
    } else if (progress > 0.6) {
      return Math.ceil(stepSize * 0.8);
    } else {
      return stepSize;
    }
  };

  const smoothScrollToLeft = (stepSize, target, pageSize) => {
    if (SliderRef.current.scrollLeft > target) {
      const scroll = getRecorrectScrollByProgress(stepSize, pageSize, itemScroll) - 1;
      const posX = SliderRef.current.scrollLeft + scroll;
      SliderRef.current.scrollLeft = posX;
      setItemScroll(itemScroll + scroll);
      setTimeout(() => {
        smoothScrollToLeft(stepSize, target, pageSize);
      }, FRAME_TIME);
    } else {
      refreshButtonHide();
    }
  };
  const smoothScrollToRight = (stepSize, target, pageSize) => {
    if (SliderRef.current.scrollLeft < target) {
      const scroll = getRecorrectScrollByProgress(stepSize, pageSize, itemScroll);
      const posX = SliderRef.current.scrollLeft + scroll;
      SliderRef.current.scrollLeft = posX;
      setItemScroll(itemScroll + scroll);

      setTimeout(() => {
        smoothScrollToRight(stepSize, target, pageSize);
      }, FRAME_TIME);
    } else {
      refreshButtonHide();
    }
  };
  const clickLeft = () => {
    let pageSize = 0 - getPageSize();
    const limit = 0;
    let target = pageSize + SliderRef.current.scrollLeft;
    if (target < limit) {
      const dist = limit - target;
      pageSize = pageSize + dist;
      target = limit;
    }
    const stepSize = Math.ceil(pageSize / (ANIM_DURATION / FRAME_TIME)) - 1;
    setItemScroll(0);
    smoothScrollToLeft(stepSize, target, pageSize);
  };

  const clickRight = () => {
    let pageSize = getPageSize();
    const limit = SliderRef.current.scrollWidth - SliderRef.current.offsetWidth;
    let target = pageSize + SliderRef.current.scrollLeft;
    if (target > limit) {
      const dist = target - limit;
      pageSize = pageSize - dist;
      target = limit;
    }
    const stepSize = Math.ceil(pageSize / (ANIM_DURATION / FRAME_TIME));
    setItemScroll(0);
    smoothScrollToRight(stepSize, target, pageSize);
  };

  const refreshButtonHide = () => {
    const scrollLeft = SliderRef.current.scrollLeft;
    const isHideLeft = scrollLeft === 0;
    const isHideRight =
      scrollLeft + SliderRef.current.offsetWidth >= SliderRef.current.scrollWidth;
    setIsHideLeft(isHideLeft);
    setIsHideRight(isHideRight);
  };

  return (
    <Wrapper>
      <Block ref={SliderRef}>
        {result.map((content, index) => (
          <Episode key={content.id}>
            <Img
              imgUrl={
                content.still_path !== null
                  ? `https://image.tmdb.org/t/p/w500/${content.still_path}`
                  : require("../../assets/noBackdrop.png")
              }
            >
              <Number>{index + 1}</Number>
            </Img>
            <Overview>
              &nbsp;
              {content.overview.length > 100
                ? `${content.overview.substring(0, 100)}...`
                : content.overview}
            </Overview>
          </Episode>
        ))}
      </Block>
      <Button isLeft={true} isHideLeft={isHideLeft} onClick={clickLeft}>
        <BtnImage src={btnLeft} />
      </Button>
      <Button isLeft={false} isHideRight={isHideRight} onClick={clickRight}>
        <BtnImage src={btnRight} />
      </Button>
    </Wrapper>
  );
};

export default SeasonSection;
