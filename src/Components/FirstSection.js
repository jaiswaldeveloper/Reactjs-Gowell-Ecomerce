import React from 'react';
import '../styles/FirstSection.css';

const FirstSection = () => {
  return (
    <>
      <section className="homemat">
        <div className="container ">
          <h2>Deal of the Day</h2>
          <div className="row">
            <div className="col-md-3 col-6">
              <div className="card-curtains mrgin-bttm">
                <div>
                  <img src="./images/curtains2.jpg" alt="" />
                </div>
                <div className="card-style">
                  <div className="card-white ">
                    <div className="text-center">
                      <img src="images/header-logonew.png" alt="error" />
                    </div>
                    <div className="mt-3">
                      <h5>
                        Curtains <br />{' '}
                      </h5>
                      <span>Under ₹ 699</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="card-curtains mrgin-bttm">
                <div>
                  <img src="./images/img2.jpg" alt="" />
                </div>
                <div className="card-style">
                  <div className="card-white ">
                    <div className="text-center">
                      <img src="images/header-logonew.png" alt="error" />
                    </div>
                    <div className="mt-3">
                      <h5>
                        Door Mat <br />{' '}
                      </h5>
                      <span>Under ₹ 399</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="card-curtains mrgin-bttm">
                <div>
                  <img src="./images/img3.jpg" alt="" />
                </div>
                <div className="card-style">
                  <div className="card-white ">
                    <div className="text-center">
                      <img src="images/header-logonew.png" alt="error" />
                    </div>
                    <div className="mt-3">
                      <h5>
                        Pillow <br />{' '}
                      </h5>
                      <span>Under ₹ 799</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="card-curtains mrgin-bttm">
                <div>
                  <img src="./images/img4.jpg" alt="" />
                </div>
                <div className="card-style">
                  <div className="card-white ">
                    <div className="text-center">
                      <img src="images/header-logonew.png" alt="error" />
                    </div>
                    <div className="mt-3">
                      <h5>
                        Pillow <br />{' '}
                      </h5>
                      <span>Under ₹ 999</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstSection;
