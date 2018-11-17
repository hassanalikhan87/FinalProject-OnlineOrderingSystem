import axios from "axios";

import { ADD_ITEM, REMOVE_ITEM, CLEAR_ORDER } from "./types";

// Get current MENU
export const submitOrder = (order, userId) => dispatch => {
  console.log("Entered Submit");
  console.log(order);

  axios
    .post("/api/orders", {
      ...order,
      userId: userId,
      items: order.items.map(item => item)
    })
    .then(
      res =>
        dispatch(
          {
            type: CLEAR_ORDER,
            payload: res.data
          }
          // , console.log(res.data[0])
        )
      // console.log()
    )
    .catch(err => {
      // TODO: Handle errors mo betta
      console.log(err);
    });
};

// Adding Products to Cart
export const addGuestItem = itemId => {
  return {
    payload: itemId,
    type: ADD_ITEM
  };
};

// Removing Products to Cart
export const removeGuestItem = itemId => {
  return {
    payload: itemId,
    type: REMOVE_ITEM
  };
};

// Clear MENU
export const clearGuestOrder = () => {
  return {
    type: CLEAR_ORDER
  };
};
