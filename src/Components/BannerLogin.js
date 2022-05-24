import React from 'react';
import '../styles/BannerLogin.css';

import { BsFillArrowRightCircleFill } from 'react-icons/bs';

function BannerLogin() {
  return (
    <>
      <div className="banner-bg">
        <h3>
          Top brands across <br />
          all categories
        </h3>
        {/* <button className="my-btn">
          Login Now <BsFillArrowRightCircleFill />
        </button> */}
        <img src="./images/gowellbgg.svg" />
      </div>
    </>
  );
}

export default BannerLogin;
