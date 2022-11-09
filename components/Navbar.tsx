import { Container } from './Container';
import {
  Nav,
  Logo,
  MenuContainer,
  MenuButton,
  ActionButton,
} from './NavbarParts';
import React from 'react';

export const Navbar = () => {
  return (
    <Nav>
      <Container justifyContent="space-between">
        <Logo src="./images/logo.svg" />
        <MenuContainer>
          <MenuButton>Objevuj</MenuButton>
          <MenuButton>Nauč se</MenuButton>
          <MenuButton>Otestuj</MenuButton>
          <MenuButton>Pracuj</MenuButton>
        </MenuContainer>
        <ActionButton>Pracuj v Reactu</ActionButton>
      </Container>
    </Nav>
  );
};
