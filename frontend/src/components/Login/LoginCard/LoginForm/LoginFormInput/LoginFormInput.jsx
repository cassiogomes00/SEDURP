import React from 'react';
import { useDispatch } from 'react-redux';
import {
  enterPassword,
  enterUsername,
} from '../../../../../store/EnterLoginInfo/EnterLoginInfo.actions';
import Wrapper from './LoginFormInput.styled';

export default function LoginFormInput({ type, name }) {
  const dispatch = useDispatch();

  const handleInput = (event) => {
    const { value, name } = event.target;

    dispatch(
      name === 'login-usr' ? enterUsername(value) : enterPassword(value)
    );
  };

  return <Wrapper type={type} name={name} onKeyUp={handleInput} required />;
}
