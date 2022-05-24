import React from 'react';
import { useParams } from 'react-router-dom';
import DATAPILLOW from '../DataPillow';
import NavBar from './NavBar';
import Footer from './Footer';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, delItem } from '../redux/actions/index';

const PillowsDetails = () => {
  const [cartBtn, setCartBtn] = useState('Add to Cart');

  /* Now we need a product id which is pass from the product page. */

  const proid = useParams();
  const proDetail = DATAPILLOW.filter((x) => x.id == proid.id);
  const pillowproduct = proDetail[0];
  console.log(pillowproduct);

  //we need to store useDispatch in a variable

  const dispatch = useDispatch();

  const handleCart = (pillowproduct) => {
    if (cartBtn === 'Add to Cart') {
      dispatch(addItem(pillowproduct));
      setCartBtn('Remove from Cart');
    } else {
      dispatch(delItem(pillowproduct));
      setCartBtn('Add to Cart');
    }
  };

  return (
    <>
      <NavBar />
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img
              src={pillowproduct.imag}
              alt={pillowproduct.title}
              height="400px"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h5 className=" fw-bold pro-title-name">{pillowproduct.title}</h5>

            <h3 className="my-2"> Rs. {pillowproduct.price}/-</h3>
            <div className="description-body">
              <h6>Product Description</h6>
              <p className="lead">{pillowproduct.disc}</p>
              <button
                onClick={() => handleCart(pillowproduct)}
                className="btn btn-outline-primary my-4 w-100"
              >
                {cartBtn}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PillowsDetails;
