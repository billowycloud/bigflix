import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../modules/user";
import styled from "styled-components";
import profile from "../Images/profile.png";
import { Link } from "react-router-dom";

const ProfileBlock = styled.div`
  &:hover ul {
    display: flex;
  }
`;

const Ul = styled.ul`
  cursor: pointer;
  display: none;
  flex-direction: column;
  height: auto;
  padding: 10px;
  margin: 0px;
  border: 0px;
  position: absolute;
  right: 0;
  z-index: 200;
  background: black;
  width: 9rem;
`;
const Item = styled.li`
  width: 9rem;
  &:hover {
    text-decoration: underline;
  }
  & + & {
    margin-top: 1rem;
  }
`;
const SLink = styled(Link)`
  font-size: 0.7rem;
`;
const Button = styled.div`
  font-size: 0.7rem;
`;

const HideTab = styled.div`
  position: relative;
  cursor: pointer;
`;

const Span = styled.span``;
const Img = styled.img`
  width: 40px;
  border-radius: 38%;
`;

const Profile = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return (
    user && (
      <ProfileBlock>
        <Span>
          <Img src={profile}></Img>
        </Span>
        <HideTab className="active">
          <Ul>
            <Item>
              <SLink to="#">{user.email}</SLink>
            </Item>
            <Item>
              <SLink to="/">
                <Button onClick={onLogout}>Bigflix에서 로그아웃</Button>
              </SLink>
            </Item>
          </Ul>
        </HideTab>
      </ProfileBlock>
    )
  );
};

export default Profile;
