import { x } from '@xstyled/emotion';

export const Nav = (props: any) => (
  <x.div
    display="flex"
    alignItems="center"
    justifyContent="center"
    w="100%"
    backgroundColor="#111624"
    {...props}
  />
);

export const Logo = (props: any) => <x.img w="132px" h="32px" {...props} />;

export const MenuButton = (props: any) => (
  <x.button
    fontFamily="Inter"
    fontWeight="500"
    fontSize="16px"
    lineHeight="64px"
    backgroundColor="#111624"
    //color="#00D8FF"
    mx="16px"
    color={{ _: '#00D8FF', hover: '#E5E5E5' }}
    textDecoration={{
      _: 'none',
      hover: 'underline 4px #FF00C7',
    }}
    {...props}
  />
);

export const MenuContainer = (props: any) => (
  <x.div display="flex" {...props} />
);

export const ActionButton = (props: any) => (
  <x.button
    fontFamily="Inter"
    fontWeight="600"
    fontSize="16px"
    lineHeight="64px"
    backgroundColor="#FF00C7"
    color="#080C18"
    px="26px"
    {...props}
  />
);
