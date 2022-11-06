import { NextPage } from 'next';

import { Home } from './home/Home';
import { Navbar } from 'components/Navbar';

const Index: NextPage = () => {
  return (
    <>
      <Navbar />
      <Home />;
    </>
  );
};

export default Index;
