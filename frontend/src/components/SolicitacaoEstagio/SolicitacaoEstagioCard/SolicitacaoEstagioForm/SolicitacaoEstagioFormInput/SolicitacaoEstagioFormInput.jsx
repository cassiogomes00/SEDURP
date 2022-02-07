import React from 'react';
import { useDispatch } from 'react-redux';
import { enterInternshipInfo } from '../../../../../store/EnterInternshipInfo/EnterInternshipInfo.actions';
import Wrapper from './SolicitacaoEstagioFormInput.styled';

export default function SolicitacaoEstagioFormInput({ type, name }) {
  const dispatch = useDispatch();

  const handleInput = (event) => {
    const { name, value } = event.target;
    dispatch(enterInternshipInfo(name, value));
  };

  return <Wrapper type={type} name={name} onKeyUp={handleInput} required />;
}
