import { x } from '@xstyled/emotion';
import React from 'react';

const Wrapper = (props: any) => (
  <x.div p="32px" w="45%" border="#141B31 solid 2px" m="16px" {...props} />
);

const Header = (props: any) => <x.h3 color="#00D8FF" {...props} />;

const Text = (props: any) => <x.p color="#7986AF" py="40px" {...props} />;

const Button = (props: any) => (
  <x.button color="#00D8FF" w="169px" h="46px" {...props} />
);

export const BigStoryItem = ({ item }: any) => {
  return (
    <Wrapper>
      <Header>{item.heading}</Header>
      <Text>{item.text}</Text>
      <Button href={item.link}>Show more</Button>
    </Wrapper>
  );
};
