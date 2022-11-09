import { Container } from './Container';
import React from 'react';
import {
  CardsWrapper,
  Heading,
  HeaderContent,
  ItemWrapper,
  CardsButton,
} from './CardsParts';
import { CardItem } from './CardItem';
import { cardsContent } from '../constants/cards';

export const CardStories = () => {
  return (
    <CardsWrapper flexDirection="column">
      <Container flexDirection="column" py="96px">
        <Heading>Card stories</Heading>
        <HeaderContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quod
          odio commodi, obcaecati cum molestias reprehenderit delectus.
        </HeaderContent>
        <ItemWrapper>
          {cardsContent.map((card) => (
            <CardItem item={card} key={card.heading} />
          ))}
        </ItemWrapper>
      </Container>
      <Container justifyContent="left" paddingBottom="96px">
        <CardsButton>Show more C2A</CardsButton>
      </Container>
    </CardsWrapper>
  );
};
