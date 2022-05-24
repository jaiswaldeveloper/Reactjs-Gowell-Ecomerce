import React from 'react';
// import './App.css';
import Carousel from './Carousel';
import NavBar from './NavBar.js';
import FirstSection from './FirstSection';
// import Menu from './Menu.js';
import FirstParallax from './FirstParallax';
import SecondParallax from './SecondParallax';
// import Pillow from './Pillow.js';
import Curtains from './Curtains';
import BannerLogin from './BannerLogin';
import Delivery from './Delivery';
import Footer from './Footer';
import Product from './Product';
import PillowProduct from './PillowProduct';
import CurtainsProduct from './CurtainsProduct';
import Main from './Main';

// import Login from './Login';

function Home() {
  return (
    <div>
      <NavBar />
      <Main />

      <FirstSection />

      <FirstParallax />
      <Product />
      <CurtainsProduct />

      <SecondParallax />
      <PillowProduct />
      <Carousel />
      <Curtains />
      <BannerLogin />
      <Delivery />

      <Footer />
    </div>
  );
}

export default Home;
