import axios from "axios";

import { GET_MENU, MENU_LOADING, CLEAR_CURRENT_MENU } from "./types";

// Get current MENU
export const getCurrentMenu = () => dispatch => {
  console.log("getting menu");

  dispatch(setMenuLoading());
  axios
    .get("/api/menuitems")
    .then(
      res =>
        dispatch(
          {
            type: GET_MENU,
            payload: res.data
          }
          // , console.log(res.data[0])
        )
      // console.log()
    )
    .catch(err =>
      dispatch({
        type: GET_MENU,
        payload: null
      })
    );
};

// Menu loading
export const setMenuLoading = () => {
  return {
    type: MENU_LOADING
  };
};

// Clear MENU
export const clearCurrentMenu = () => {
  return {
    type: CLEAR_CURRENT_MENU
  };
};
