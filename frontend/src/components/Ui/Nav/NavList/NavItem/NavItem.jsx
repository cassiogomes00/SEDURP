import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from './NavItem.styled';

export default function NavItem({ item }) {
  return (
    <Link to={item.path}>
      <Wrapper>{`${item.name} >`}</Wrapper>
    </Link>
  );
}
