import React from 'react';
import DATAPILLOW from '../DataPillow';
import { NavLink } from 'react-router-dom';
import '../styles/Product.css';

const PillowProduct = () => {
  const cardItem = (item) => {
    return (
      <div className="card-section mb-4" key={item.id}>
        <img src={item.imag} className="card-img-top" alt={item.title} />
        <div className="card-body-section">
          <h3 className="card-title mt-2">{item.title}</h3>

          <div className=" buy">
            <p className="lead">Rs {item.price}</p>
            <NavLink
              to={`/PillowProduct/${item.id}`}
              className="btn btn-primary buy-btn mb-2"
            >
              Buy Now
            </NavLink>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container py-4">
        <div className="text-center">
          <h2>Pillow product</h2>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-around">
          {DATAPILLOW.map(cardItem)}
        </div>
      </div>
    </div>
  );
};

export default PillowProduct;
