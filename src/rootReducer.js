import data from "./data.json";
import { ADD_TO_CART, REMOVE_FROM_CART, APPLY_DISCOUNT } from "./actionTypes";
import { calculateCartTotal } from "./helpers";

const INITIAL_STATE = {
  products: data.products,
  cartItems: {},
  cartValue: 0.0,
  discountApplied: false,
  discountAmount: 0
}

const DISCOUNTS = {
  REMOVE10: 0.1,
  REMOVE20: 0.2,
  REMOVE30: 0.3
}

function rootReducer(state = INITIAL_STATE, action) {
  switch(action.type){
    //action: type, id
    case ADD_TO_CART: {
      const cartCopy = { ...state.cartItems };
      //increment or create key of action.id
      cartCopy[action.id] = (cartCopy[action.id] || 0) + 1;
      return {
        ...state, 
        cartItems: cartCopy,
      }
    }

    case REMOVE_FROM_CART: {
      const cartCopy = {...state.cartItems };
      if(!cartCopy[action.id]) return state;
      //decrement cart copy quantity by id
      cartCopy[action.id]--;

      if (cartCopy[action.id] === 0) {
        //if quantity = 0, delete the item from the cart. 
        delete cartCopy[action.id];
      }
      return {...state, cartItems: cartCopy}
    }
    case APPLY_DISCOUNT: {
      if (
        state.discountApplied === false &&
        DISCOUNTS[action.discount]
      ) {
        const discountAmount = DISCOUNTS[action.discount];
        return {
          ...state,
          cartValue: calculateCartTotal(
            state.products,
            state.cartItems,
            discountAmount
          ),
          discountApplied: true,
          discountAmount
        };
      }
      return state;
    }
    default:
      return state;
  }
}
export default rootReducer;