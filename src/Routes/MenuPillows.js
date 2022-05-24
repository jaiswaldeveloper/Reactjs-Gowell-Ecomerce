import React from 'react';
import PillowProduct from '../Components/PillowProduct';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
// import Pillow from '../Components/Pillow';

const MenuPillows = () => {
  return (
    <>
      <NavBar />
      <PillowProduct />
      {/* <Pillow /> */}
      <Footer />
    </>
  );
};

export default MenuPillows;
