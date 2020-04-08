import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled, { css } from "styled-components";
import logo from "../assets/logo.png";
import Search from "./RightHeader/Search";
import Account from "./RightHeader/Account";
import { useScroll } from "../lib/hooks/useScroll";

const HeaderBlock = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background: rgb(20, 20, 20);
  z-index: 10;
  display: ${(props) => props.current && props.scrollY !== 0 && "none"};
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
  width: 9rem;
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
`;

const SLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Img = styled.img`
  width: 100%;
  background-position: center center;
  background-size: cover;
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
  margin-left: 4rem;
  display: flex;
  flex-grow: 1;
`;
const RightItemBlock = styled.div`
  margin-right: 4rem;
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
`;

const Header = ({ location: { pathname }, scrollY }) => {
  const { y } = useScroll();
  return (
    /* 현재 페이지가 tv이거나 movie면 헤드 스크롤에 따라 감추기 */
    <HeaderBlock
      scrollY={scrollY}
      current={pathname === "/browse/tv" || pathname === "/browse/movie"}
      style={{
        background:
          y < 50 &&
          "linear-gradient(to bottom, rgb(12,12,12),rgba(12,12,12,0.4), transparent)",
      }}
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
        </LeftItemBlock>
        <RightItemBlock>
          <RightLongItem>
            <Search />
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
