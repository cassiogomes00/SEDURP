import React from 'react';
import Wrapper from './Nav.styled';
import NavList from './NavList/NavList';

const DEFAULT_NAV_ITEMS = [
  { name: 'ALUNOS', path: '/alunos' },
  { name: 'ADMINISTRATIVO', path: '/administrativo' },
];

export default function Nav() {
  return (
    <Wrapper>
      <NavList navItems={DEFAULT_NAV_ITEMS} />
    </Wrapper>
  );
}
