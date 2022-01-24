import React from 'react';
import Wrapper from './LoginCard.styled';
import LoginCardTitle from './LoginCardTitle/LoginCardTitle';
import LoginForm from './LoginForm/LoginForm';

export default function LoginCard() {
  return (
    <Wrapper>
      <LoginCardTitle>Faça seu login</LoginCardTitle>
      <LoginForm />
    </Wrapper>
  );
}
