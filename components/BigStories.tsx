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
      <Container flexDirection="column" paddingBottom="128px">
        <Heading>Big Stories</Heading>
        <HeaderContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quod
          odio commodi, obcaecati cum molestias reprehenderit delectus.
        </HeaderContent>
        <ItemWrapper>
          {storiesContent.map((card, index) => (
            <BigStoryItem item={card} key={index} />
          ))}
        </ItemWrapper>
      </Container>
    </StoriesWrapper>
  );
};
