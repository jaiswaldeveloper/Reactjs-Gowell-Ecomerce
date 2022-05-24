import React from 'react';
import '../styles/NavBar.css';
// import { FaFacebookF } from 'react-icons/fa';
// import { AiFillInstagram } from 'react-icons/ai';
// import { FaTwitter } from 'react-icons/fa';
// import { FaYoutube } from 'react-icons/fa';
// import { FaSearch } from 'react-icons/fa';
// import { FiShoppingCart } from 'react-icons/fi';
// import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import CartButton from '../Buttons/CartButton';

// import RegisterButton from '../Buttons/RegisterButton';
import headerlogo from '../company/headerlogo.png';

function NavBar() {
  return (
    <>
      <header>
        {/* <div className="container-fluid bg-light">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <div className="nav-support">Email: info@gowellshop.com</div>
            </div>
            <div className="col-md-5">
              <div className="font-icon">
                <FaFacebookF className="social-icon" />
                <AiFillInstagram className="social-icon" />
                <FaTwitter className="social-icon" />
                <FaYoutube className="social-icon" />
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div> */}
        <div className="container nav-bg ">
          <div className="row">
            <div className="col-md-3 col-4">
              <div className="top-logo">
                <Link to="/">
                  <img src={headerlogo} alt="error" />
                </Link>
              </div>
            </div>
            <div className="col-md-5 col-8">
              <div className="text-center search-bar">
                <input
                  className="search-nav  form-control"
                  type="search"
                  name=""
                  placeholder="Search for product..."
                />
                {/* <a href="/" class="search_icon">
                    <FaSearch />
                    </a> */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="nav-buton ">
                <div className="log-buton">
                  <Link to="/SignUp">
                    {' '}
                    <button className="btn btn-primary btn-colour">
                      SignUp
                    </button>
                  </Link>
                </div>
                <div className="cart-buton">
                  <CartButton />
                </div>
              </div>
              {/* <div className="row ">
                <div className=" col-md-6 col-6 ">
                 
                </div>
           
                <div className="col-md-6 col-6">
                 
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light bg ">
          <div className="container-fluid">
            <button
              className="navbar-toggler white-toogle"
              style={{ border: 'none' }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon "></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav mx-auto p-2  ">
                <ul className="navbar-nav ">
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="nav-link active text"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/AboutUs" className="nav-link text">
                      about us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/MenuDoorMat" className="nav-link text">
                      Door Mat
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/MenuPillows" className="nav-link text">
                      Pillows
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/MenuCurtains" className="nav-link text">
                      Home Curtains
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/ContactUs" className="nav-link text">
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
