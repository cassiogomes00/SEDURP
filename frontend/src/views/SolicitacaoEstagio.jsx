import React from 'react';
import Wrapper from '../assets/styles/globalStyle';
import SolicitacaoEstagioCard from '../components/SolicitacaoEstagio/SolicitacaoEstagioCard/SolicitacaoEstagioCard';
import Nav from '../components/Ui/Nav/Nav';

export default function SolicitacaoEstagio() {
  return (
    <Wrapper>
      <Nav />
      <SolicitacaoEstagioCard />
    </Wrapper>
  );
}
