import React from 'react';
import '../styles/RegisterSignUp.css';
import headerlogo from '../company/headerlogo.png';
import { Link } from 'react-router-dom';

// import signup from '../company/signup.jpg';
const SignUp = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <form className="register-form mt-5">
              <div className="text-center">
                {' '}
                <img src={headerlogo} className="about-fluid w-25" />
              </div>
              <div>
                <h4>Create your Account</h4>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Name "
                  className="form-control"
                  required
                ></input>
              </div>
              <div>
                <input
                  type="phone"
                  placeholder="Mobile Number "
                  className="form-control"
                  required
                ></input>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Address "
                  className="form-control"
                  required
                ></input>
              </div>
              <div>
                <input
                  type="Email"
                  placeholder="Email "
                  className="form-control"
                  required
                ></input>
              </div>
              <div>
                <input
                  type="password"
                  placeholder="password "
                  className="form-control"
                  required
                ></input>
              </div>

              <div>
                <button className="btn btn-primary btn-colour w-100">
                  SignUp
                </button>
              </div>
              <div>
                <h6>
                  Already have an account? <Link to="/Login">Login</Link>{' '}
                </h6>
              </div>
            </form>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
      <div className="form-background">
        {/* <img src={signup} className="about-fluid" /> */}
      </div>
    </>
  );
};

export default SignUp;
