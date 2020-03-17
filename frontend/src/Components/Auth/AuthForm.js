import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Block = styled.div`
  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
    color: white;
    margin-bottom: 2rem;
  }
  padding: 50px;
`;
const Form = styled.form`
  input,
  button {
    font-size: 1.3rem;
    padding-top: 0.9rem;
    padding-bottom: 0.9rem;
    border: none;
    border-radius: 5px;
  }
`;
const Input = styled.input`
  width: 100%;
  color: #737373;
  padding-left: 1rem;
  margin-bottom: 1.2rem;
  background: #333333;
`;
const Button = styled.button`
  color: white;
  font-weight: bold;
  margin-top: 1.2rem;
  width: 100%;
  background: #ce202c;
  outline: none;
  cursor: pointer;
  &:hover {
    background: red;
    transition: background 0.5s ease-in-out;
  }
`;

const Footer = styled.div`
  margin-top: 1.3rem;
  text-align: right;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const textMap = {
  login: "로그인",
  register: "회원가입"
};

const AuthForm = ({ type, form, onChange, onSubmit }) => {
  const text = textMap[type];
  return (
    <Block>
      <h1>{text}</h1>
      <Form onSubit={onSubmit}>
        <Input
          autoComplete="email"
          placeholder="이메일 입력"
          type="email"
          name="username"
          onChange={onChange}
          value={form.username}
        ></Input>
        <Input
          autoComplete="new-password"
          placeholder="비밀번호 입력"
          name="password"
          type="password"
          onChange={onChange}
          value={form.password}
        ></Input>
        {type === "register" && (
          <Input
            autoComplete="new-password-check"
            placeholder="비밀번호 다시 입력"
            name="passwordConfirm"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        <Button>{type === "login" ? text : "등록"}</Button>
      </Form>
      <Footer>
        {type === "login" ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </Footer>
    </Block>
  );
};

export default AuthForm;
