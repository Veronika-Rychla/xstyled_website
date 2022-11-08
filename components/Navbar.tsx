import { Container } from './Container';
import {
  Nav,
  Logo,
  MenuButton,
  MenuContainer,
  ActionButton,
} from './NavbarParts';
import React, { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Nav>
      <Container justifyContent="space-between" margin="0 50px">
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
