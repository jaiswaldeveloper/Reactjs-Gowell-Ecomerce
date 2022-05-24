import React from 'react';
import NavBar from './NavBar';
import contact from '../company/contact.svg';
import Footer from './Footer';

const ContactUs = () => {
  return (
    <>
      <NavBar />
      <div className="content-contact mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <h3 className="heading mb-4">Let's talk about everything!</h3>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptas debitis, fugit natus?
                  </p> */}

                  <p>
                    <img src={contact} alt="Image" className="img-fluid" />
                  </p>
                </div>
                <div className="col-md-6">
                  <form
                    className="mb-5"
                    method="post"
                    id="contactForm"
                    name="contactForm"
                  >
                    <div>
                      <input
                        type="text"
                        className="form-control mt-3"
                        name="name"
                        id="name"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        className="form-control mt-3"
                        placeholder="Email"
                        required
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        className="form-control mt-3"
                        placeholder="Mobile Number"
                        required
                      />
                    </div>

                    <div>
                      <textarea
                        className="form-control mt-3"
                        cols="30"
                        rows="7"
                        placeholder="Write your message"
                        required
                      ></textarea>
                    </div>

                    <div>
                      <button className="btn btn-primary  rounded-0 py-1 px-4 mt-4 rounded-1">
                        Send Message
                      </button>
                    </div>
                  </form>

                  <div id="form-message-success">
                    Your message was sent, thank you!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
