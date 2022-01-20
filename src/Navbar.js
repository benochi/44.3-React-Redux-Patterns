import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Link } from "react-router-dom";
import './Navbar.css';



/** */
function Navbar() {
  const cartContents = useSelector(store => store.cartItems, shallowEqual); //obj

  function calcCartCount(cart) {
    let total = 0
    if (Object.keys(cart).length > 0) {
      total = Object.values(cart).reduce((a, b) => a + b)
    }
    return total
  }

  return (
    <div className="Navigation">
      <Link to="/" className="logo link">
        Shoply
      </Link>

      <div className="cart icon">
        <Link to="/cart">
            Cart ({calcCartCount(cartContents)})
        </Link>
      </div>
    </div>
  );
}

export default Navbar;