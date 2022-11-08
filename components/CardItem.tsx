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
    {...props}
  />
);

const Header = (props: any) => <x.h3 color="#00D8FF" {...props} />;

const Text = (props: any) => <x.p color="#7986AF" {...props} />;

const Link = (props: any) => <x.a color="#00D8FF" {...props} />;

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
