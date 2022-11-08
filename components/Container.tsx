import { x } from '@xstyled/emotion';

export const Container = (props: any) => (
  <x.div
    display="flex"
    w="100%"
    maxWidth="1920px"
    alignItems="center"
    justifyContent="center"
    px="30px"
    {...props}
  />
);
