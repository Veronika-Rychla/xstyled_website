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
    fontSize="96px"
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
    w="50%"
    m="24px 0 0 0"
    {...props}
  />
);

export const HeaderButton = (props: any) => (
  <x.button
    fontFamily="Inter"
    fontWeight="600"
    fontSize="24px"
    backgroundColor="#00D8FF"
    color="#080C18"
    w="341px"
    h="78px"
    m="56px 0 96px 0"
    lineHeight="64px"
    {...props}
  />
);
