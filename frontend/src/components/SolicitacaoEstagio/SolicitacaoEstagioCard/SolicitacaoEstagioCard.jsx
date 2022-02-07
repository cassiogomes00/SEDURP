import React from 'react';
import Wrapper from './SolicitacaoEstagioCard.styled';
import SolicitacaoEstagioCardTitle from './SolicitacaoEstagioCardTitle/SolicitacaoEstagioCardTitle';
import SolicitacaoEstagioForm from './SolicitacaoEstagioForm/SolicitacaoEstagioForm';

export default function SolicitacaoEstagioCard() {
  return (
    <Wrapper>
      <SolicitacaoEstagioCardTitle>
        Solicitação de estágio
      </SolicitacaoEstagioCardTitle>
      <SolicitacaoEstagioForm />
    </Wrapper>
  );
}
