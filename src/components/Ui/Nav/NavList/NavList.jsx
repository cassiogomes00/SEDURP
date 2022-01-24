import React from 'react';
import NavItem from './NavItem/NavItem';
import Wrapper from './NavList.styled';

export default function NavList({ navItems }) {
  return (
    <Wrapper>
      {navItems.map((navItem) => {
        return <NavItem item={navItem} key={navItem.path} />;
      })}
    </Wrapper>
  );
}
