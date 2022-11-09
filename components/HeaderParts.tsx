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
    w={{ _: '100%', md: '65%' }}
    {...props}
  />
);

export const HeaderButton = (props: any) => (
  <x.div
    fontFamily="Inter"
    fontWeight="600"
    fontSize={{ _: '16px', md: '24px' }}
    textAlign="center"
    backgroundColor="#00D8FF"
    color="#080C18"
    w={{ _: '186px', md: '341px' }}
    lineHeight={{ _: '43px', md: '78px' }}
    cursor="pointer"
    marginBottom={{ _: '64px', md: '96px' }}
    {...props}
  />
);
