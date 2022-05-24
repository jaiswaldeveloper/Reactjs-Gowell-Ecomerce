import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const Faqs = () => {
  return (
    <React.Fragment>
      <NavBar />
      <section className="faqs">
        <div className="container">
          <h3>FAQs</h3>

          <div className="row">
            <div className="faqs-body ">
              <h5>How do I get started with Gowell?</h5>
              <p>
                Gowell is a network centric B2B platform, designed specifically
                for small & medium businesses in India. It brings traders,
                wholesalers, retailers and manufacturers in India on to a single
                platform. With real insights into active trends, and great B2B
                features, Gowellbrings to them the power of technology to scale
                & nurture their business. To get started with Gowell, you need
                to download GowellApp, and register your business. Once
                registered, you will have access to all the trades and
                selections from sellers from all over India.
              </p>
              <br />
              <h5>Where can I download GowellApp?</h5>
              <p>
                You can download GowellApp by visiting https://Gowell.com/app on
                your mobile or by clicking the banners below for your respective
                platforms.
              </p>
              <br />
              <h5>
                How do I register? Are there specific requirements to register
                on Udaan?
              </h5>
              <p>
                You can register with your mobile number and OTP. Once you have
                put the mobile number and OTP, registration process will start.
                Being a B2B platform, the only requirement to register with
                Gowellis that you own or work at a business or a shop. Given the
                trade oriented nature of the transactions, end consumers will
                not find enough value on Gowell.
              </p>
              <br />
              <h5>How do I buy / trade on Gowell?</h5>
              <p>
                You can buy / sell / trade on Gowellusing GowellApp. If you are
                a new buyer you can discover selection in following ways:
                <ol>
                  <li>
                    Go to 'Search' tab search for your product requirements. We
                    have tried our best to create a set of pre-defined searches
                    that can quickly get you to a wide variety of products
                    available on Gowell.
                  </li>
                  <li>
                    In the same tab, you can also search for sellers (such as
                    manufacturers, wholesalers, distributers) and chat with them
                    to explore their selection.
                  </li>
                </ol>
              </p>
              <br />
              <h5>Payments: How do I pay for the purchase?</h5>
              <p>
                You can pay by cash once the order is delivered to you. There is
                provision to pay 10% while placing the order.
              </p>
              <br />
              <h5>
                How do I get the purchased products? Who provides the courier
                services?
              </h5>
              <p>
                As a buyer, you need not worry about arranging courier or any
                3rd party couriers to pickup and deliver your order.
              </p>
              <br />
              <h5>Who pays for the courier?</h5>
              <p>As a buyer, you are liable to pay for the courier services.</p>
              <br />
              <h5>
                How long does it take for the courier to deliver products?
              </h5>

              <p>
                It depends on where the seller is shipping from and what is the
                buyer's location. Usually, interstate deliveries take anywhere
                between 7-10 days while within the state can happen within a
                week. Please check with GowellSupport to understand how long
                will it take to get your order.
              </p>
              <br />
              <h5>Where can I see the orders I have placed?</h5>
              <p>You can see all your orders in 'My Orders' screen.</p>
              <br />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Faqs;
