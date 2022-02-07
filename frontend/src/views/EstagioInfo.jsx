import React from 'react';
import Wrapper from '../assets/styles/globalStyle';
import EstagioInfoCard from '../components/EstagioInfo/EstagioInfoCard/EstagioInfoCard';
import Nav from '../components/Ui/Nav/Nav';

export default function EstagioInfo() {
  return (
    <Wrapper>
      <Nav />
      <EstagioInfoCard />
    </Wrapper>
  );
}
