import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import btnLeft from "../../assets/btn_left.png";
import btnRight from "../../assets/btn_right.png";

/* 스크롤 애니메이션 */
const ANIM_DURATION = 300;
const FRAME_TIME = 10;

const Block = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
`;
const Wrapper = styled.div`
  position: relative;
`;
const Title = styled.div`
  font-size: 1.5rem;
  padding-left: 1rem;
  font-weight: bold;
  position: absolute;
  top: 0.2rem;
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
  height: 20px;
  background: rgb(20, 20, 20);
`;
const BtnImage = styled.img`
  width: 0px;
`;
const Button = styled.div`
  position: absolute;
  top: 2.7rem;
  height: 21.6rem;
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

const Section = ({ title, children }) => {
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
    <Block>
      <Title>{title}</Title>
      <Wrapper>
        <Contents ref={SliderRef}>{children}</Contents>
        <HideScroll />
        <Button isLeft={true} isHideLeft={isHideLeft} onClick={clickLeft}>
          <BtnImage src={btnLeft} />
        </Button>
        <Button isLeft={false} isHideRight={isHideRight} onClick={clickRight}>
          <BtnImage src={btnRight} />
        </Button>
      </Wrapper>
    </Block>
  );
};

export default Section;
