import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../../../store/Login/Login.actions';
import ButtonRowStyled from './ButtonRow.styled';
import Wrapper from './LoginForm.styled';
import LoginFormInput from './LoginFormInput/LoginFormInput';
import LoginFormSubmit from './LoginFormSubmt/LoginFormSubmit';

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginInfo = useSelector((state) => {
    return state.enterLoginInfo;
  });

  const loginStatus = useSelector((state) => {
    return state.login;
  });

  useEffect(() => {
    if (loginStatus.error !== null) {
      alert(loginStatus.error);
    }

    if (loginStatus.token !== null) {
      navigate('/dashboard');
    }
  }, [loginStatus]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(loginInfo));
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <label htmlFor="login-usr">Usuário</label>
      <LoginFormInput type="text" name="login-usr" />

      <label htmlFor="login-pwd">Senha</label>
      <LoginFormInput type="password" name="login-pwd" />

      <ButtonRowStyled>
        <LoginFormSubmit />
        <Link to="">
          <a>Esqueci minha senha</a>
        </Link>
      </ButtonRowStyled>
    </Wrapper>
  );
}
