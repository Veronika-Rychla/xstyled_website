import { x } from '@xstyled/emotion';

export const Nav = (props: any) => (
  <x.div
    display={{ _: 'none', md: 'flex' }}
    alignItems="center"
    justifyContent="center"
    position="fixed"
    w="100%"
    h="64px"
    px="5%"
    backgroundColor="#111624"
    {...props}
  />
);

export const Logo = (props: any) => (
  <x.img w="132px" h="32px" alt="Logo" {...props} />
);

export const MenuContainer = (props: any) => (
  <x.div
    display="flex"
    justifyContent="center"
    alignItems="center"
    {...props}
  />
);

export const MenuButton = (props: any) => (
  <x.div
    display="inline-block"
    fontFamily="Inter"
    fontWeight="500"
    fontSize="16px"
    lineHeight="64px"
    mx="16px"
    cursor="pointer"
    color={{ _: '#00D8FF', hover: '#E5E5E5', active: '#E5E5E5' }}
    borderBottom={{
      _: 'solid 4px #111624',
      hover: 'solid 4px #FF00C7',
      active: 'solid 4px #FF00C7',
    }}
    {...props}
  />
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
