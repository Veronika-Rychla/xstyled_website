import { x } from '@xstyled/styled-components';

export const Container = (props: any) => (
  <x.div
    display="flex"
    w="100%"
    maxWidth="1920px"
    alignItems="center"
    justifyContent="center"
    {...props}
  />
);
