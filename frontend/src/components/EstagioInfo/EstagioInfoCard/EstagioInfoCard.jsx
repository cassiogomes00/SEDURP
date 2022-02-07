import React from 'react';
import { useSelector } from 'react-redux';
import Wrapper from './EstagioInfoCard.styled';
import EstagioInfoCardContent from './EstagioInfoCardContent/EstagioInfoCardContent';
import EstagioInfoCardTitle from './EstagioInfoCardTitle/EstagioInfoCardTitle';

export default function EstagioInfoCard() {
  const estagioInfo = useSelector((state) => state.enterInternshipInfo);
  return (
    <Wrapper>
      <EstagioInfoCardTitle />
      <EstagioInfoCardContent>
        {JSON.stringify(estagioInfo, null, 2)}
      </EstagioInfoCardContent>
    </Wrapper>
  );
}
