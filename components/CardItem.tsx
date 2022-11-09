import { x } from '@xstyled/emotion';
import React from 'react';

const Wrapper = (props: any) => (
  <x.div
    p="32px"
    w={{ _: '100%', md: '30%' }}
    borderStyle="solid"
    borderWidth="2px"
    borderColor={{ _: '#141B31', hover: '#7986AF', active: '#7986AF' }}
    m="16px"
    {...props}
  />
);

const Tag = (props: any) => (
  <x.div
    display="inline-block"
    fontFamily="Inter"
    fontSize="16px"
    fontWeight="500"
    lineHeight="32px"
    color="#080C18"
    backgroundImage="gradient-to-r"
    gradientFrom="#00D8FF"
    gradientTo="#00FF94"
    padding="4px 12px"
    {...props}
  />
);

const Header = (props: any) => (
  <x.h3
    color={{ _: '#00D8FF', hover: '#ffffff', active: '#ffffff' }}
    textDecoration={{ _: 'none', hover: 'underline solid #ffffff' }}
    fontFamily="Inter"
    fontSize="32px"
    fontWeight="400"
    lineHeight="32px"
    my="32px"
    {...props}
  />
);

const Text = (props: any) => (
  <x.p
    fontFamily="Inter"
    fontSize="16px"
    fontWeight="400"
    lineHeight="24px"
    color={{ _: '#7986AF', hover: '#ffffff' }}
    {...props}
  />
);

const Link = (props: any) => (
  <x.a
    display="inline-block"
    color="#00D8FF"
    fontFamily="Inter"
    fontSize="16px"
    fontWeight="400"
    lineHeight="24px"
    mt="32px"
    {...props}
  />
);

export const CardItem = ({ item }: any) => {
  return (
    <Wrapper>
      <Tag>{item.tag}</Tag>
      <Header>{item.heading}</Header>
      <Text>{item.text}</Text>
      <Link href={item.link}>Story detail</Link>
    </Wrapper>
  );
};
