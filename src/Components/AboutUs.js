import React from 'react';
import about from '../company/about.png';
import '../styles/AboutUs.css';
import NavBar from './NavBar';
import Footer from './Footer';
const AboutUs = () => {
  return (
    <>
      <NavBar />
      <section className="about">
        <div className="about-header">
          <img src={about} className="about-fluid" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-5"></div>
            <div className="col-md-7">
              {/* <h2>about</h2> */}
              <div className="about-body">
                <h4>We deliver better than just great-looking Pictures</h4>
                <h6>
                  We will help over 100 fast-growing independent retailers
                  achieve more with powerful mobile-first websites that trade on
                  our feature-rich eCommerce platform across India. Within a
                  single platform, you can manage every aspect of your online
                  store, allowing you to stay focused on your delighting your
                  customers.
                </h6>
                <h6>
                  Beyond go live, our support and trading teams will help you to
                  attract, convert and retain customers continually. And that’s
                  not all. Once you have got the fundamentals in place, we will
                  be there to help you with
                </h6>
                <ul>
                  <li>
                    {' '}
                    Online payment methods and retail finance for larger
                    purchases
                  </li>
                  <li>
                    {' '}
                    Delivery flexibility for the consumer and cost-saving for
                    the retailer with enhanced courier and shipping options.
                  </li>

                  <li>
                    {' '}
                    Total journey optimisation from landing page to checkout
                  </li>
                  <li> Mobile apps for Apple & Android</li>
                  <li>
                    Selling through marketplaces and social (Facebook &
                    Instagram)
                  </li>
                </ul>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
