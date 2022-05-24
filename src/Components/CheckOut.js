import React from 'react';
import NavBar from './NavBar';
import { useSelector } from 'react-redux';

const CheckOut = () => {
  const state = useSelector((state) => state.addItem);

  var total = 0;

  const itemList = (item) => {
    total = total + item.price;
    return (
      <li className="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 className="my-0">{item.title}</h6>
        </div>
        <span className="text-muted">Rs {item.price}</span>
      </li>
    );
  };
  return (
    <>
      <NavBar />
      <div className="container my-5">
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">
                {state.length}
              </span>
            </h4>
            <ul className="list-group mb-3">
              {state.map(itemList)}

              <li className="list-group-item d-flex justify-content-between">
                <span>Total (₹)</span>
                <strong>Rs {total}</strong>
              </li>
            </ul>

            <form className="card p-2">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Promo code"
                />
                <button type="submit" className="btn btn-secondary">
                  Redeem
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Billing address</h4>
            <form className="checkout-form">
              <div className="row g-3">
                <div className="col-sm-6">
                  <label for="address">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder="Enter your First Name"
                    required
                  />
                </div>

                <div className="col-sm-6">
                  <label for="address">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder="Enter your Last name"
                    required
                  />
                </div>

                <div className="col-12">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id=""
                    placeholder="amit@gmail.com"
                    required
                  />
                </div>

                <div className="col-12">
                  <label for="address">Full Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder=""
                    required
                  />
                </div>

                <div className="col-md-4">
                  <label htmlFor="state">Select City</label>
                  <select className="form-select" id="" required>
                    <option value="">Choose...</option>
                    <option>New Delhi</option>
                    <option>Mumbai</option>
                    <option>Jaipur</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="zip">Zip</label>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">Zip code required.</div>
                </div>
              </div>

              <hr className="my-4" />

              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="" />
                <label className="form-check-label" for="same-address">
                  Shipping address is the same as my billing address
                </label>
              </div>

              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="" />
                <label className="form-check-label" for="save-info">
                  Save this information for next time
                </label>
              </div>

              <hr className="my-4" />

              <h4 className="mb-3">Payment</h4>

              <div className="my-3">
                <div className="form-check">
                  <input
                    id=""
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required
                  />
                  <label className="form-check-label" for="credit">
                    Credit card
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id=""
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required
                  />
                  <label className="form-check-label" for="debit">
                    Debit card
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id=""
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required
                  />
                  <label className="form-check-label" htmlFor="paypal">
                    PayPal
                  </label>
                </div>
              </div>

              <div className="row gy-3">
                <div className="col-md-6">
                  <label htmlFor="cc-name">Name on card</label>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder=""
                    required
                  />
                  <small className="text-muted">
                    Full name as displayed on card
                  </small>
                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>

                <div className="col-md-6">
                  <label for="cc-number" className="form-label">
                    Credit card number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-expiration" className="form-label">
                    Expiration
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">
                    Expiration date required
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-cvv" className="form-label">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">Security code required</div>
                </div>
              </div>

              <hr className="my-4" />

              <button className="w-100 btn btn-primary btn-lg">
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
