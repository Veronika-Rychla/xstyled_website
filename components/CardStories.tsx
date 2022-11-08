import { Container } from './Container';
import React from 'react';
import {
  CardsWrapper,
  Heading,
  HeaderContent,
  ItemWrapper,
} from './CardsParts';
import { CardItem } from './CardItem';
import { cardsContent } from '../constants/cards';

export const CardStories = () => {
  return (
    <CardsWrapper>
      <Container flexDirection="column" py="96px">
        <Heading>Card stories</Heading>
        <HeaderContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quod
          odio commodi, obcaecati cum molestias reprehenderit delectus laborum
          iusto molestiae magnam nisi. Minus expedita vel quibusdam non quos
          doloremque fuga.
        </HeaderContent>
        <ItemWrapper>
          {cardsContent.map((card) => (
            <CardItem item={card} key={card.heading} />
          ))}
        </ItemWrapper>
      </Container>
    </CardsWrapper>
  );
};
