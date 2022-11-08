import { NextPage } from 'next';

import { Navbar } from 'components/Navbar';
import { Header } from 'components/Header';
import { CardStories } from 'components/CardStories';
import { BigStories } from 'components/BigStories';
import { Footer } from 'components/Footer';

const Index: NextPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <CardStories />
      <BigStories />
      <Footer />
    </>
  );
};

export default Index;
