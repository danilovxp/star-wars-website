import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElemets';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">Star Wars</NavLink>
        <NavIcon onClick={toggle}>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
