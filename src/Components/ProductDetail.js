import React from 'react';
import { useParams } from 'react-router-dom';
import DATA from '../Data';
import NavBar from './NavBar';
import Footer from './Footer';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, delItem } from '../redux/actions/index';

const ProductDetail = () => {
  const [cartBtn, setCartBtn] = useState('Add to Cart');

  /* Now we need a product id which is pass from the product page. */

  const proid = useParams();
  const proDetail = DATA.filter((x) => x.id == proid.id);
  const product = proDetail[0];
  console.log(product);

  //we need to store useDispatch in a variable

  const dispatch = useDispatch();

  const handleCart = (product) => {
    if (cartBtn === 'Add to Cart') {
      dispatch(addItem(product));
      setCartBtn('Remove from Cart');
    } else {
      dispatch(delItem(product));
      setCartBtn('Add to Cart');
    }
  };

  return (
    <>
      <NavBar />
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={product.imag} alt={product.title} height="400px" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h5 className=" fw-bold pro-title-name">{product.title}</h5>

            <h3 className="my-2">Rs. {product.price}/-</h3>

            <div className="description-body">
              <h6>Product Description</h6>
              <p className="lead">{product.disc}</p>
              <button
                onClick={() => handleCart(product)}
                className="btn btn-outline-primary my-4 w-100 "
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

export default ProductDetail;
