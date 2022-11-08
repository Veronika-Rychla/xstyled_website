import { x } from '@xstyled/emotion';
import React from 'react';

const Wrapper = (props: any) => (
  <x.div p="32px" w="30%" border="#141B31 solid 2px" m="16px" {...props} />
);

const Tag = (props: any) => (
  <x.div
    display="inline-block"
    color="#080C18"
    backgroundImage="gradient-to-r"
    gradientFrom="#00D8FF"
    gradientTo="#00FF94"
    w="113px"
    h="32px"
    p="4px 12px"
    {...props}
  />
);

const Header = (props: any) => <x.h3 color="#00D8FF" my="30px" {...props} />;

const Text = (props: any) => <x.p color="#7986AF" {...props} />;

const Link = (props: any) => (
  <x.a color="#00D8FF" lineHeight="40px" {...props} />
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
