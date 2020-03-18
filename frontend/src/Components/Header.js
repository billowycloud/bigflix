import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../Images/logo.png';
import Search from '../Routes/Search';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../modules/user';

const HeaderBlock = styled.header`
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
const RightBlock = styled.div`
  margin-right: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserInfo = styled.div`
  margin-left: 3rem;
`;

const Header = ({ location: { pathname } }) => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <HeaderBlock>
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
          <Search />
          {user ? <UserInfo>{user.email}</UserInfo> : <UserInfo>...</UserInfo>}
          {user ? (
            <button onClick={onLogout}>로그아웃</button>
          ) : (
            <button>...</button>
          )}
        </RightBlock>
      </Wrapper>
    </HeaderBlock>
  );
};

export default withRouter(Header);
