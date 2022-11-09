import { x } from '@xstyled/emotion';

export const FooterWrapper = (props: any) => (
  <x.div
    display="flex"
    alignItems="center"
    justifyContent="center"
    w="100%"
    h="248px"
    backgroundColor="#111624"
    py="70px 64px"
    {...props}
  />
);

export const Logo = (props: any) => (
  <x.img w="134px" h="32px" mb="24px" {...props} />
);

export const Copyright = (props: any) => (
  <x.p
    color="#ffffff"
    fontFamily="Inter"
    fontWeight="500"
    fontSize="16px"
    lineHeight="24px"
    mb="16px"
    {...props}
  />
);

export const Motto = (props: any) => (
  <x.p
    color="#7986AF"
    fontFamily="Inter"
    fontWeight="400"
    fontSize="16px"
    lineHeight="24px"
    {...props}
  />
);
