import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../modules/user';
import styled from 'styled-components';
import profile from '../../Images/profile.png';
import { Link } from 'react-router-dom';

const AccountBlock = styled.div`
  position: relative;
`;

const DropdownButton = styled.div`
  &:hover > div {
    display: block;
  }
`;

const Dropdown = styled.div`
  display: none;
  position: absolute;
  right: 0rem;
  font-size: 0.8rem;
  z-index: 1;
  background: rgba(40, 40, 40, 0.4);
  width: 18vh;
  padding: 10px;
  border: 1px solid rgba(128, 128, 128, 0.3);
  z-index: 200;
  ul li {
    width: 100%;
    line-height: 32px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  #logout {
    width: 100%;
    color: rgba(255, 128, 128, 0.8);
  }
`;

const Img = styled.img`
  width: 40px;
  border-radius: 38%;
`;

const Account = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return (
    user && (
      <AccountBlock>
        <DropdownButton>
          <Link to="#" role="button">
            <span>
              <Img src={profile} />
            </span>
          </Link>
          <Dropdown>
            <ul>
              <li>
                <Link to="/browse">{user.email}</Link>
              </li>
              <li>
                <div id="logout" role="button" onClick={onLogout}>
                  Bigflix에서 로그아웃
                </div>
              </li>
            </ul>
          </Dropdown>
        </DropdownButton>
      </AccountBlock>
    )
  );
};

export default Account;
