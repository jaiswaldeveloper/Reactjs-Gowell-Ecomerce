import React from 'react';

import { FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function CartButton() {
  const state = useSelector((state) => state.addItem);
  return (
    <NavLink to="/cart" className="btn btn-primary btn-colour">
      <FiShoppingCart className="btn-icon" />  Cart({state.length})
    </NavLink>
  );
}

export default CartButton;
