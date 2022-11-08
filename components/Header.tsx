import { Container } from './Container';
import React from 'react';
import { Hero, Heading, HeaderContent, HeaderButton } from './HeaderParts';

export const Header = () => {
  return (
    <Hero>
      <Container flexDirection="column" py="96px">
        <Heading>Nauč se React s námi</Heading>
        <HeaderContent>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error harum
          iste itaque nihil ab labore minus non, est fugiat similique doloremque
          ducimus deleniti, ipsa dolores in, officia excepturi sit voluptas.
        </HeaderContent>
        <HeaderButton>C2A Fun Academy</HeaderButton>
      </Container>
    </Hero>
  );
};
