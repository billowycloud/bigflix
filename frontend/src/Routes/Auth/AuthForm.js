import React from 'react';
import styled from 'styled-components';

const Block = styled.div``;
const Form = styled.form``;
const Input = styled.input``;
const Button = styled.button``;
const Footer = styled.div``;

const AuthForm = () => {
  return (
    <Block>
      <h1>로그인</h1>
      <Form>
        <Input autoComplete="이메일" placeholder="이메일"></Input>
        <Input
          autoComplete="비밀번호"
          placeholder="비밀번호"
          type="password"
        ></Input>
        <Button>로그인</Button>
      </Form>
      <Footer></Footer>
    </Block>
  );
};

export default AuthForm;
