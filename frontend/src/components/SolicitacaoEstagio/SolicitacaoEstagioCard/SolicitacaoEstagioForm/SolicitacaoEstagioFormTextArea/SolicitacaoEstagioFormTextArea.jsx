import React from 'react';
import { useDispatch } from 'react-redux';
import { enterInternshipInfo } from '../../../../../store/EnterInternshipInfo/EnterInternshipInfo.actions';
import Wrapper from './SolicitacaoEstagioFormTextArea.styled';

export default function SolicitacaoEstagioFormTextArea({ name }) {
  const dispatch = useDispatch();

  const handleInput = (event) => {
    const { name, value } = event.target;
    dispatch(enterInternshipInfo(name, value));
  };

  return <Wrapper name={name} onKeyUp={handleInput} required></Wrapper>;
}
