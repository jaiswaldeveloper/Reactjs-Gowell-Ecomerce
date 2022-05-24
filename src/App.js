import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Carousel from './Components/Carousel';
import NavBar from './Components/NavBar.js';
import FirstSection from './Components/FirstSection';
import MenuDoorMat from './Routes/MenuDoorMat.js';
import MenuPillows from './Routes/MenuPillows';

import MenuCurtains from './Routes/MenuCurtains';
import FirstParallax from './Components/FirstParallax';
import SecondParallax from './Components/SecondParallax';
// import Pillow from './Components/Pillow.js';
import Curtains from './Components/Curtains';
import BannerLogin from './Components/BannerLogin';
import Delivery from './Components/Delivery';
import Footer from './Components/Footer';
// import Login from './Components/Login';
import Home from './Components/Home';
import Product from './Components/Product';
import ProductDetail from './Components/ProductDetail';
import Cart from './Components/Cart';
import CheckOut from './Components/CheckOut';
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';
import Faqs from './Components/Faqs';
import TermandCondition from './Components/TermandCondition';
import PrivacyPolicy from './Components/PrivacyPolicy';
import ShippingPolicy from './Components/ShippingPolicy';

import PillowProduct from './Components/PillowProduct';
import PillowsDetails from './Components/PillowsDetails';
import CurtainsProduct from './Components/CurtainsProduct';
import CurtainsDetails from './Components/CurtainsDetails';
import SignUp from './Components/SignUp';
import Login from './Components/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/NavBar" element={<NavBar />} />
        <Route path="/Carousel" element={<Carousel />} />
        <Route path="/FirstSection" element={<FirstSection />} />
        <Route path="/MenuDoorMat" element={<MenuDoorMat />} />
        <Route path="/MenuPillows" element={<MenuPillows />} />
        <Route path="/MenuCurtains" element={<MenuCurtains />} />

        <Route path="/PillowProduct" element={<PillowProduct />} />
        <Route path="/PillowsDetails" element={<PillowsDetails />} />
        <Route path="/PillowProduct/:id" element={<PillowsDetails />} />
        <Route path="/CurtainsProduct" element={<CurtainsProduct />} />
        <Route path="/CurtainsDetails" element={<CurtainsDetails />} />

        <Route path="/CurtainsProduct/:id" element={<CurtainsDetails />} />

        <Route path="/FirstParallax" element={<FirstParallax />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Product/:id" element={<ProductDetail />} />

        <Route path="/Cart" element={<Cart />} />
        <Route path="/CheckOut" element={<CheckOut />} />

        {/* <Route path="/Pillows" element={<Pillow />} /> */}
        <Route path="/SecondParallax" element={<SecondParallax />} />
        <Route path="/Curtains" element={<Curtains />} />
        <Route path="/BannerLogin" element={<BannerLogin />} />
        <Route path="/Delivery" element={<Delivery />} />
        {/* <Route path="/Login" element={<Login />} /> */}
        <Route path="/Footer" element={<Footer />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Faqs" element={<Faqs />} />
        <Route path="/TermandCondition" element={<TermandCondition />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/ShippingPolicy" element={<ShippingPolicy />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
