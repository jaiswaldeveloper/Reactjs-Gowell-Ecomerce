import React from 'react';
import videoBg from '../assets/videoBg.mp4';

const Main = () => {
  return (
    <div className="main">
      <video src={videoBg} autoPlay loop muted />

      <div className="content-slide">
        <h1>
          India's largest B2B Platform
          <br />
          for businesses & shop-owners
        </h1>
      </div>
    </div>
  );
};

export default Main;
