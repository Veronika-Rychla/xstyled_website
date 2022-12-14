import { x } from '@xstyled/emotion';

export const StoriesWrapper = (props: any) => (
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
  <x.div
    display="flex"
    flexWrap="wrap"
    flexDirection={{ _: 'column', md: 'row' }}
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
