import React from 'react';
import Wrapper from './LoginFormInput.styled';

export default function LoginFormInput({ type, name }) {
  return <Wrapper type={type} name={name} required />;
}
