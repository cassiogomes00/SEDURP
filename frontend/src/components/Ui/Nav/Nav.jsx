import React from 'react';
import Wrapper from './Nav.styled';
import NavList from './NavList/NavList';

const DEFAULT_NAV_ITEMS = [
  { name: 'LOGIN', path: '/' },
  { name: 'SOLICITAR ESTÁGIO', path: '/solicitacao-estagio' },
];

export default function Nav() {
  return (
    <Wrapper>
      <NavList navItems={DEFAULT_NAV_ITEMS} />
    </Wrapper>
  );
}
