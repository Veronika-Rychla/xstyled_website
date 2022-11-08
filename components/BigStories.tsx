import { Container } from './Container';
import React from 'react';
import {
  StoriesWrapper,
  Heading,
  HeaderContent,
  ItemWrapper,
} from './BigStoriesParts';
import { storiesContent } from '../constants/stories';
import { BigStoryItem } from './BigStoryItem';

export const BigStories = () => {
  return (
    <StoriesWrapper>
      <Container flexDirection="column" py="96px">
        <Heading>Big Stories</Heading>
        <HeaderContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quod
          odio commodi, obcaecati cum molestias reprehenderit delectus laborum
          iusto molestiae magnam nisi. Minus expedita vel quibusdam non quos
          doloremque fuga.
        </HeaderContent>
        <ItemWrapper>
          {storiesContent.map((card) => (
            <BigStoryItem item={card} key={card.heading} />
          ))}
        </ItemWrapper>
      </Container>
    </StoriesWrapper>
  );
};
