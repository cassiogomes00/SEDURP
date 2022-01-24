import React from 'react';
import Wrapper from './LoginForm.styled';
import LoginFormInput from './LoginFormInput/LoginFormInput';
import LoginFormSubmit from './LoginFormSubmt/LoginFormSubmit';

function handleSubmit(event) {
  event.preventDefault();
}

export default function LoginForm() {
  return (
    <Wrapper onSubmit={handleSubmit}>
      <label htmlFor="login-usr"></label>
      <LoginFormInput type="text" name="login-usr" />

      <label htmlFor="login-pwd"></label>
      <LoginFormInput type="password" name="login-pwd" />

      <LoginFormSubmit />
    </Wrapper>
  );
}
