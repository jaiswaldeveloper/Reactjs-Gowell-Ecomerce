import React from 'react';
import '../styles/Footer.css';
import { ImHeadphones } from 'react-icons/im';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import payment from '../company/payment.JPG';
import headerlogo from '../company/headerlogo.svg';
import easygrow from '../company/easygrow.png';
import app from '../company/app.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container ">
          <div className="row space">
            <div className="col-md-5 space">
              <div className="content-footer ">
                <ImHeadphones className="footer-icon" />
                <h5>
                  Got Questions? Call us at
                  <br /> 1800-890-1707
                </h5>
              </div>
              <ul>
                {' '}
                <p>Contact Infomation</p>
                <li>Gowell Shop </li>
                <li>
                  A-18, Sector-62, Noida,
                  <br /> Uttar Pradesh, 201301
                </li>
                <li>Email: info@gowellshop.com</li>
              </ul>

              <div className="footer-section">
                <li>
                  <Link to="https://www.facebook.com/gowell2022">
                    <FaFacebookF
                      className="footer-social-icon"
                      target="_blank"
                    />
                  </Link>
                </li>
                <li>
                  <AiFillInstagram className="footer-social-icon" />
                </li>
                <li>
                  <FaTwitter className="footer-social-icon" />
                </li>
                <li>
                  <FaYoutube className="footer-social-icon" />
                </li>
              </div>
            </div>
            <div className="col-md-5 space decoration">
              <h5>Quick Links</h5>
              <ul>
                <li>
                  <Link to="/"> Home </Link>
                </li>

                <li>
                  <Link to="/TermandCondition"> Terms & Conditions </Link>
                </li>
                <li>
                  <Link to="/faqs">FAQs </Link>
                </li>
                <li>
                  <Link to="/PrivacyPolicy"> Privacy Policy </Link>
                </li>
                <li>
                  <Link to="/ShippingPolicy">Shipping and Delivery Policy</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 space">
              <div>
                {' '}
                <img src={headerlogo} className="footer-logo" alt="error" />
              </div>

              <div className="payment-logo">
                <img src={payment} className="footer-logo" alt="error" />
              </div>
              <div className="payment-logo">
                <img src={app} className="footer-logo" alt="error" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="rights ">
                <div>
                  <p>Copyright © 2022 GoWellshop, Designed By</p>
                </div>
                <div className="text-center">
                  {' '}
                  <img src={easygrow} className="company-logo" alt="error" />
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
