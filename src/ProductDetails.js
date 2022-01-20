import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import './ProductDetail.css';
import {addToCart, removeFromCart} from "./actions";
import {useDispatch} from "react-redux";

//takes url param as id key in products
//return product details
function ProductDetail() {
  const dispatch = useDispatch();
  const { id } = useParams()
  const item = useSelector( store => store.products[id])

  function add(evt) {
    dispatch(addToCart(id));
  }
  
  function remove(evt) {
    dispatch(removeFromCart(id));
  }

  return (
    <div className="ProductDetail">
      <img src={`${item.image_url}`}
        alt={`${item.name}`} />
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>${item.price}</p>
    
    <button onClick={add}>+</button>
    <button onClick={remove}>-</button>
    </div>
  );
}

export default ProductDetail;
