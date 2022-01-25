import React from 'react';
import Wrapper from '../assets/styles/globalStyle';
import DashboardHome from '../components/Dashboard/DashboardHome';
import Nav from '../components/Ui/Nav/Nav';

export default function Dashboard() {
  return (
    <Wrapper>
      <Nav />
      <DashboardHome />
    </Wrapper>
  );
}
