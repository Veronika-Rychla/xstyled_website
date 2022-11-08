import { x } from '@xstyled/emotion';

export const FooterWrapper = (props: any) => (
  <x.div
    display="flex"
    alignItems="center"
    justifyContent="center"
    w="100%"
    backgroundColor="#111624"
    {...props}
  />
);

export const Copyright = (props: any) => (
  <x.p
    color="#ffffff"
    fontFamily="Inter"
    fontWeight="500"
    fontSize="16px"
    {...props}
  />
);

export const Motto = (props: any) => (
  <x.p
    color="#7986AF"
    fontFamily="Inter"
    fontWeight="400"
    fontSize="16px"
    {...props}
  />
);

export const Logo = (props: any) => <x.img w="132px" h="32px" {...props} />;
