import React from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { FaShippingFast } from 'react-icons/fa';
import { RiArrowLeftRightFill } from 'react-icons/ri';
import { FaPhoneVolume } from 'react-icons/fa';
import '../styles/Delivery.css';

function Delivery() {
  return (
    <>
      <section className="delivery">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 col-6">
              <div className="delivery-body">
                <div className="content-delivery">
                  <BsCheckLg className="delivery-icon" />{' '}
                  <h3>Quality Product</h3>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="delivery-body">
                <div className="content-delivery">
                  <FaShippingFast className="delivery-icon" />
                  <h3>Free shopping </h3>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="delivery-body">
                <div className="content-delivery">
                  <RiArrowLeftRightFill className="delivery-icon" />
                  <h3> 14-days return</h3>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="delivery-body">
                <div className="content-delivery">
                  <FaPhoneVolume className="delivery-icon" />{' '}
                  <h3>24/7 support</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Delivery;
