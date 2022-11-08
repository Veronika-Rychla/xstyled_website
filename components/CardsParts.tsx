import { x } from '@xstyled/emotion';

export const CardsWrapper = (props: any) => (
  <x.div
    display="flex"
    alignItems="center"
    justifyContent="center"
    w="100%"
    backgroundColor="#080C18"
    {...props}
  />
);

export const ItemWrapper = (props: any) => (
  <x.div display="flex" flexWrap="wrap" {...props} />
);

export const Heading = (props: any) => (
  <x.h2
    fontFamily="Inter"
    fontWeight="400"
    fontSize="48px"
    color="#FFFFFF"
    {...props}
  />
);

export const HeaderContent = (props: any) => (
  <x.p
    fontFamily="Inter"
    fontWeight="400"
    fontSize="20px"
    color="#7986AF"
    my="40px"
    w="60%"
    textAlign="center"
    {...props}
  />
);

export const CardsButton = (props: any) => (
  <x.button
    fontFamily="Inter"
    fontWeight="600"
    fontSize="16px"
    backgroundColor="#00D8FF"
    color="#080C18"
    w="170px"
    h="43px"
    m="56px 0 96px 0"
    lineHeight="64px"
    textAlign="center"
    {...props}
  />
);
