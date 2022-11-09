import { x } from '@xstyled/emotion';

export const Hero = (props: any) => (
  <x.div
    display="flex"
    alignItems="center"
    justifyContent="center"
    w="100%"
    backgroundColor="#141B31"
    {...props}
  />
);

export const Heading = (props: any) => (
  <x.h1
    fontFamily="Inter"
    fontWeight="300"
    fontSize={{ _: 40, md: 96 }}
    lineHeight="116px"
    color="#FFFFFF"
    textAlign="center"
    paddingTop="64px"
    {...props}
  />
);

export const HeaderContent = (props: any) => (
  <x.p
    fontFamily="Inter"
    fontWeight="400"
    fontSize="20px"
    lineHeight="28px"
    textAlign="center"
    color="#7986AF"
    paddingTop="24px"
    paddingBottom="64px"
    w="65%"
    {...props}
  />
);

export const HeaderButton = (props: any) => (
  <x.div
    fontFamily="Inter"
    fontWeight="600"
    fontSize="24px"
    textAlign="center"
    backgroundColor="#00D8FF"
    color="#080C18"
    // w={{ _: 186, md: 341 }}
    // h={{ _: 24, md: 186 }}
    w="341px"
    h="78px"
    lineHeight="78px"
    cursor="pointer"
    marginBottom="96px"
    {...props}
  />
);
