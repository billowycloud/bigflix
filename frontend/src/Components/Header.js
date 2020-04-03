import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';
import logo from '../assets/logo.png';
import Search from './RightHeader/Search';
import Account from './RightHeader/Account';
import { useScroll } from '../lib/hooks/useScroll';
const HeaderBlock = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  background: rgb(20, 20, 20);
  z-index: 10;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const List = styled.ul`
  padding-left: 3rem;
  display: flex;
  justify-content: space-between;
`;

const Item = styled.li`
  width: 9rem;
  height: 60px;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  ${props =>
    props.current &&
    css`
      font-weight: bold;
      font-size: 1.3rem;
      color: rgb(255, 255, 255);
    `}

  &:hover {
    opacity: 0.5;
    font-size: 1.3rem;
    color: #ff7675;
    transition: all 0.2s ease-in-out;
  }
  & + & {
    margin-left: 0.5rem;
  }
`;

const SLink = styled(Link)`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Img = styled.img`
  width: 100%;
  background-position: center center;
  background-size: cover;
`;
const RightBlock = styled.div`
  margin-right: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightItem = styled.div`
  width: 3rem;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  & + & {
    margin-left: 1rem;
  }
`;

const Header = ({ location: { pathname } }) => {
  const { y } = useScroll();
  return (
    <HeaderBlock
      style={{
        background:
          y < 50 &&
          'linear-gradient(to bottom, rgb(12,12,12),rgba(12,12,12,0.4), transparent)'
      }}
    >
      <Wrapper>
        <List>
          <Item>
            <SLink to="/browse">
              <Img src={logo} alt="logo" />
            </SLink>
          </Item>
          <Item current={pathname === '/browse'}>
            <SLink to="/browse">홈</SLink>
          </Item>
          <Item current={pathname === '/browse/tv'}>
            <SLink to="/browse/tv">TV 프로그램</SLink>
          </Item>
          <Item current={pathname === '/browse/movie'}>
            <SLink to="/browse/movie">영화</SLink>
          </Item>
        </List>
        <RightBlock>
          <RightItem>
            <Search />
          </RightItem>
          <RightItem>
            <Account />
          </RightItem>
        </RightBlock>
      </Wrapper>
    </HeaderBlock>
  );
};

export default withRouter(Header);
