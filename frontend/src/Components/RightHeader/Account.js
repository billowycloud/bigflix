import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../modules/user";
import styled, { css, keyframes } from "styled-components";
import profile from "../../assets/profile.png";
import downArrow from "../../assets/down_arrow_white.png";

const fadeIn = keyframes`
 from{
   opacity: 0;
 }
 to{
  opacity: 1;
 }
`;

const AccountBlock = styled.div`
  position: relative;
`;

const DropdownButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  cursor: pointer;
`;

const Dropdown = styled.div`
  background: rgba(12, 12, 12, 0.9);
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  font-size: 0.8rem;
  position: absolute;
  right: 0;
  display: none;
  flex-direction: column;
  width: 10rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  ${(props) =>
    props.hide &&
    css`
      display: flex;
      animation: ${fadeIn} 0.5s ease-in-out;
    `}
`;

const ProfileImg = styled.img`
  margin-right: 0.4rem;
  height: 40px;
  border-radius: 20%;
`;

const List = styled.div`
  &:first-child {
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
  &:nth-child(2) {
    margin-top: 0.7rem;
    margin-bottom: 0;
    div {
      font-weight: bold;
    }
    div:last-child {
      margin-bottom: 0;
    }
  }

  /* 프로필 lIST 공통 설정 */
  div {
    display: inline-block;
    padding-left: 0.7rem;
    padding-right: 0.7rem;
    margin-bottom: 0.7rem;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Account = () => {
  const [isOpen, setIsOpen] = useState(false); //Account탭 오픈 유무
  const toggle = () => setIsOpen(!isOpen);
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    user && (
      <AccountBlock onMouseOver={toggle} onMouseOut={toggle}>
        <DropdownButton>
          <ProfileImg src={profile} alt="profile" />
          <img
            style={{ width: "10px", heigth: "10px" }}
            src={downArrow}
            alt="downarrow"
          />
        </DropdownButton>
        <Dropdown hide={isOpen}>
          <List>
            <div>{user.email}</div>
            <div>프로필 설정</div>
          </List>
          <List>
            <div>계정</div>
            <div role="button" onClick={onLogout}>
              Bigflix에서 로그아웃
            </div>
          </List>
        </Dropdown>
      </AccountBlock>
    )
  );
};

export default Account;
