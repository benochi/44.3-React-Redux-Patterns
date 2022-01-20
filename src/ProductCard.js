import React from 'react';
import './ProductCard.css';
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {addToCart, removeFromCart} from "./actions";

//handle each product card add buttons for adding or removing products to Cart. 
function ProductCard({id, name, description, image_url}) {
const dispatch = useDispatch(); // takes action with type key

  function add(evt) {
  dispatch(addToCart(id));
  }
  function remove(evt) {
  dispatch(removeFromCart(id));
  }

  return (
    <div className="ProductCard">
      <div>
        <Link to={`/products/${id}`}>
          <img src={`${image_url}`} alt={`${description}`}/>
          <h2>{name}</h2>
        </Link>
      </div>

      <div className="cart-buttons">
          <button onClick={add}>+</button>
          <button onClick={remove}>-</button>
      </div>


    </div>
  );
}

export default ProductCard;