import { x } from '@xstyled/emotion';

export const CardsWrapper = (props: any) => (
  <x.div display="flex" w="100%" backgroundColor="#080C18" {...props} />
);

export const ItemWrapper = (props: any) => (
  <x.div
    display="flex"
    flexDirection={{ _: 'column', md: 'row' }}
    flexWrap="wrap"
    {...props}
  />
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
    lineHeight="28px"
    color="#7986AF"
    my="40px"
    w={{ _: '100%', md: '65%' }}
    textAlign="center"
    {...props}
  />
);

export const CardsButton = (props: any) => (
  <x.div
    display="inline-block"
    fontFamily="Inter"
    fontWeight="600"
    fontSize="16px"
    lineHeight="43px"
    textAlign="center"
    backgroundColor="#00D8FF"
    color="#080C18"
    cursor="pointer"
    w="170px"
    h="43px"
    marginLeft="18px"
    {...props}
  />
);
