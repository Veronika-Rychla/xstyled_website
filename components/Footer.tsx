import { Container } from './Container';
import React from 'react';
import { FooterWrapper, Logo, Copyright, Motto } from './FooterParts';

export const Footer = () => {
  return (
    <FooterWrapper>
      <Container flexDirection="column">
        <Logo src="./images/logo.svg" />
        <Copyright>© 2022 React.fun</Copyright>
        <Motto>Nauč se, objevuj a pracuj v Reactu</Motto>
      </Container>
    </FooterWrapper>
  );
};
