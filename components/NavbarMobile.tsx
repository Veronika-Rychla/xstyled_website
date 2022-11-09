import React, { useState } from 'react';
import { x } from '@xstyled/emotion';
import { Container } from './Container';

const NavMobile = (props: any) => (
  <x.div
    display={{ _: 'flex', md: 'none' }}
    alignItems="center"
    justifyContent="center"
    position="fixed"
    top={0}
    left={0}
    w="100vw"
    h="64px"
    backgroundColor="#111624"
    {...props}
  />
);

const Logo = (props: any) => <x.img w="132px" h="32px" {...props} />;

const MenuContainer = (props: any) => (
  <x.div
    display="flex"
    flexDirection="column"
    position="fixed"
    alignItems="center"
    justifyContent="space-between"
    top={64}
    left={0}
    h="calc(100vh - 64px)"
    w="100vw"
    bg="#111624"
    pb="30px"
    {...props}
  />
);

const MenuButton = (props: any) => (
  <x.span
    display="block"
    textAlign="center"
    fontFamily="Inter"
    fontWeight="500"
    fontSize="16px"
    lineHeight="64px"
    backgroundColor="#111624"
    color="#00D8FF"
    w="100%"
    cursor="pointer"
    textDecoration={{ _: 'none', hover: 'underline 4px #01FF97' }}
    {...props}
  />
);

const HamburgerBarWrapper = (props: any) => (
  <x.div
    display="flex"
    flexDirection="column"
    alignItems="flex-end"
    justifyContent="center"
    w="32px"
    h="32px"
    {...props}
  />
);

const HamburgerBar = (props: any) => (
  <x.div w="32px" h="2px" my="2px" bg="white" {...props} />
);

const HamburgerBarClose = (props: any) => (
  <x.div
    w="32px"
    h="2px"
    my="2px"
    bg="white"
    transform="translateY(0px) rotate(-45deg)"
    {...props}
  />
);

const ButtonsWrapper = (props: any) => (
  <x.div display="flex" flexDirection="column" w="100%" {...props} />
);

export const ActionButton = (props: any) => (
  <x.span
    display="inline-block"
    cursor="pointer"
    fontFamily="Inter"
    fontWeight="600"
    textAlign="center"
    fontSize="16px"
    lineHeight="64px"
    backgroundColor="#01FF97"
    color="#080C18"
    px="24px"
    {...props}
  />
);

export const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((value) => !value);
  };
  return (
    <NavMobile>
      <Container justifyContent="space-between">
        <Logo src="./images/logo-small.svg" />
        <HamburgerBarWrapper onClick={handleClick}>
          {isOpen ? (
            <>
              <HamburgerBarClose />
              <HamburgerBarClose transform="translateY(-5px) rotate(45deg)" />
            </>
          ) : (
            <>
              <HamburgerBar />
              <HamburgerBar w="24px" />
              <HamburgerBar />
            </>
          )}
        </HamburgerBarWrapper>
      </Container>
      {isOpen && (
        <MenuContainer>
          <ButtonsWrapper>
            <MenuButton>Objevuj</MenuButton>
            <MenuButton>Nauč se</MenuButton>
            <MenuButton>Otestuj</MenuButton>
            <MenuButton>Pracuj</MenuButton>
          </ButtonsWrapper>
          <ActionButton>Pracuj v Reactu</ActionButton>
        </MenuContainer>
      )}
    </NavMobile>
  );
};
