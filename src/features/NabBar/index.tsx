import {
  NavLink,
  NavLinksWrapper,
  NavWrapper,
  Logo,
} from './styled';
import React from 'react';

export const NavBar = () => {
  return (
    <NavWrapper>
      <Logo>
        Serj Portfolio
      </Logo>
      <NavLinksWrapper>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/projects'>My Projects</NavLink>
      </NavLinksWrapper>

    </NavWrapper>
  );
};

