import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../Images/logo.png';

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  background: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  padding-left: 3rem;
  display: flex;
`;

const Item = styled.li`
  width: 9rem;
  height: 60px;
  text-align: center;
  border-bottom: 4px solid
    ${props => (props.current ? '#e50914' : 'transparent')};
  transition: border-bottom 0.5s ease-in-out;
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

export default withRouter(({ location: { pathname } }) => (
  <Header>
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
  </Header>
));
