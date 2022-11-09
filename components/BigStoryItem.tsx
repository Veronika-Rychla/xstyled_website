import { x } from '@xstyled/emotion';
import React from 'react';

const itemTheme = {
  light: {
    wrapper: {
      bg: '#00D8FF',
    },
    header: {
      color: '#141B31',
    },
    text: {
      color: '#141B31',
    },
    button: {
      bg: '#080C18',
      color: '#FFFFFF',
    },
  },
  dark: {
    wrapper: {
      bg: '#141B31',
    },
    header: {
      color: '#FFFFFF',
    },
    text: {
      color: '#FFFFFF',
    },
    button: {
      bg: '#00D8FF',
      color: '#080C18',
    },
  },
};

const Wrapper = (props: any) => (
  <x.div w={{ _: '100%', md: '45%' }} p="48px" m="16px" {...props} />
);

const Header = (props: any) => (
  <x.h3
    fontFamily="Inter"
    fontWeight="400"
    fontSize="32px"
    lineHeight="39px"
    {...props}
  />
);

const Text = (props: any) => (
  <x.p
    fontFamily="Inter"
    fontWeight="400"
    fontSize="20px"
    lineHeight="28px"
    py="32px"
    {...props}
  />
);

const Button = (props: any) => (
  <x.button
    fontFamily="Inter"
    fontWeight="600"
    fontSize="16px"
    lineHeight="46px"
    px="24px"
    {...props}
  />
);

export const BigStoryItem = ({ item }: any) => {
  const theme = itemTheme[item.type];
  return (
    <Wrapper {...theme.wrapper}>
      <Header {...theme.header}>{item.heading}</Header>
      <Text {...theme.text}>{item.text}</Text>
      <Button {...theme.button} href={item.link}>
        Show more
      </Button>
    </Wrapper>
  );
};
