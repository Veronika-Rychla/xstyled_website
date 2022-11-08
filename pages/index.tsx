import { NextPage } from 'next';

import { Navbar } from 'components/Navbar';
import { Header } from 'components/Header';
import { CardStories } from 'components/CardStories';
import { BigStories } from 'components/BigStories';
import { Footer } from 'components/Footer';
import { NavbarMobile } from 'components/NavbarMobile';

const Index: NextPage = () => {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <Header />
      <CardStories />
      <BigStories />
      <Footer />
    </>
  );
};

export default Index;
