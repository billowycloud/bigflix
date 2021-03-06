import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import styled, { css } from "styled-components";
import logo from "../assets/logo.png";
import Search from "./RightHeader/Search";
import Account from "./RightHeader/Account";
import { useScroll } from "../lib/hooks/useScroll";
import menuButton from "../assets/menu_white.png";

const HeaderBlock = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background: rgb(20, 20, 20);
  z-index: 10;
  ${(props) =>
    props.current &&
    (props.direction === 1 ||
      (props.scrollY !== 0 &&
        css`
          display: none;
        `))};
  ${(props) =>
    props.headerY === 0 &&
    !props.current &&
    css`
      background: linear-gradient(
        to bottom,
        rgb(12, 12, 12),
        rgba(12, 12, 12, 0.4),
        transparent
      );
      transition: background 0.5s ease-in-out;
    `}
`;

const List = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const Item = styled.li`
  &:first-child {
    margin-right: 1rem;
  }
  width: 10rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.2s ease-in-out;
  ${(props) =>
    props.current &&
    css`
      font-weight: bold;
      font-size: 1.3rem;
      color: rgb(255, 255, 255);
    `}

  &:hover {
    font-size: 1.3rem;
    color: rgba(255, 56, 56, 0.9);
  }
  ${(props) =>
    props.menu &&
    css`
      width: 5rem;
    `}
`;

const SLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const Img = styled.img`
  width: 100%;
`;

const RightItem = styled.div`
  width: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RightLongItem = styled(RightItem)`
  margin-right: 1rem;
  width: 15rem;
  display: flex;
  justify-content: flex-end;
`;

const LeftItemBlock = styled.div`
  position: relative;
  margin-left: 4rem;
  display: flex;
  flex-grow: 1;
  ${Item} {
    &:nth-child(6) {
      display: none;
    }
  }
  @media (max-width: 1024px) {
    ${Item} {
      &:not(:first-child) {
        display: none;
      }
      &:nth-child(6) {
        display: flex;
      }
    }
  }
`;
const RightItemBlock = styled.div`
  margin-right: 4rem;
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
`;

const Menu = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const MenuWrapper = styled.div`
  display: none;
  @media (max-width: 1024px) {
    background: rgba(12, 12, 12, 0.9);
    position: absolute;
    border: 0.5px solid rgba(255, 255, 255, 0.3);
    left: 3rem;
    top: 5rem;
    width: 12rem;
    ${(props) =>
      props.isOpen &&
      css`
        display: flex;
        flex-direction: column;
      `}
  }
`;

const MenuItem = styled.div`
  height: 2.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  :not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const Header = ({ location: { pathname }, scrollY, currentRoute }) => {
  const { y, direction } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  return (
    /* 현재 페이지가 tv이거나 movie면 장르헤더 스크롤에 따라 감추기 */
    <HeaderBlock
      current={pathname === "/browse/tv" || pathname === "/browse/movie"}
      headerY={y}
      direction={direction}
    >
      <List>
        <LeftItemBlock>
          <Item>
            <SLink to="/browse">
              <Img src={logo} alt="logo" />
            </SLink>
          </Item>
          <Item current={pathname === "/browse"}>
            <SLink to="/browse">홈</SLink>
          </Item>
          <Item current={pathname === "/browse/tv"}>
            <SLink to="/browse/tv">TV 프로그램</SLink>
          </Item>
          <Item current={pathname === "/browse/movie"}>
            <SLink to="/browse/movie">영화</SLink>
          </Item>
          <Item current={pathname === "/browse/mylist"}>
            <SLink to="/browse/mylist">내가 찜한 콘텐츠</SLink>
          </Item>
          <Item
            menu={true}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <Menu src={menuButton} alt="menu" />
          </Item>
          <MenuWrapper isOpen={isOpen}>
            <MenuItem
              onClick={() => {
                if (isOpen) setIsOpen(false);
              }}
            >
              <SLink to="/browse">홈</SLink>
            </MenuItem>
            <MenuItem
              onClick={() => {
                if (isOpen) setIsOpen(false);
              }}
            >
              <SLink to="/browse/tv">TV 프로그램</SLink>
            </MenuItem>
            <MenuItem
              onClick={() => {
                if (isOpen) setIsOpen(false);
              }}
            >
              <SLink to="/browse/movie">영화</SLink>
            </MenuItem>
            <MenuItem
              onClick={() => {
                if (isOpen) setIsOpen(false);
              }}
            >
              <SLink to="/browse/mylist">내가 찜한 콘텐츠</SLink>
            </MenuItem>
          </MenuWrapper>
        </LeftItemBlock>
        <RightItemBlock>
          <RightLongItem>
            <Search currentRoute={currentRoute} />
          </RightLongItem>
          <RightItem>
            <Account />
          </RightItem>
        </RightItemBlock>
      </List>
    </HeaderBlock>
  );
};

export default withRouter(Header);
