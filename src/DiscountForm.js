import React, { useState } from 'react'
import { applyDiscount } from "./actions";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

function DiscountForm() {
  const [discountCode, setDiscountCode] = useState("");
  const { cartValue,
    discountAmount,
    discountApplied } = useSelector(store => store, shallowEqual)

  const handleChange = evt => {
    setDiscountCode(evt.target.value);
  };

  function handleDiscount(evt) {
    evt.preventDefault();
    dispatch(applyDiscount(discount));
    setDiscount("");
  }

  return (
    <div>
      <form onSubmit={handleDiscount} className="form-inline">
          <label htmlFor="discount">Discount:</label>
          <input
            id="discount"
            name="discount"
            className="form-control ml-2 mr-2"
            value={discount}
            onChange={handleChange}
          />
          <button className="btn btn-primary">Apply Discount</button>
        </form>
    </div>
  )
}

export default DiscountForm;