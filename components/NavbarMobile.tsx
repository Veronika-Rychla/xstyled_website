import React from 'react';
import { x } from '@xstyled/emotion';
import { Container } from './Container';

const NavMobile = (props: any) => (
  <x.div
    display="flex"
    alignItems="center"
    justifyContent="center"
    flexDirection="column"
    w="100%"
    backgroundColor="#111624"
    {...props}
  />
);

const Logo = (props: any) => <x.img w="132px" h="32px" {...props} />;

const MenuContainer = (props: any) => (
  <x.div display={{ _: 'none', md: 'flex' }} {...props} />
);

const MenuButton = (props: any) => (
  <x.button
    fontFamily="Inter"
    fontWeight="500"
    fontSize="16px"
    lineHeight="64px"
    backgroundColor="#111624"
    color="#00D8FF"
    mx="16px"
    textDecoration={{ _: 'none', hover: 'underline 4px #01FF97' }}
    {...props}
  />
);

const HamburgerBar = (props: any) => (
  <x.div
    display="block"
    w="32px"
    h="16px"
    mx="2px"
    color="#7986AF"
    {...props}
  />
);

export const Navbar = () => {
  return (
    <NavMobile>
      <Container flexDirection="space-between">
        <Logo src="./images/logo=small.svg" />
        <MenuContainer></MenuContainer>
      </Container>
    </NavMobile>
  );
};
