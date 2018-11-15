import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER } from "./types";
// import restaurantdash from "../components/dashboard/restaurantdash";

//REGISTER USER
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
  console.log(userData);
};

//Update Menu
export const updateItem = (RestaurantData, history) => dispatch => {
  // console.log(history);
  axios
    .post("/api/menuitems/update", RestaurantData)
    .then(res => history.push("/menu"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
  console.log(RestaurantData);
  console.log(history);
};

// export const getMenu = RestaurantData => dispatch => {
//   axios.get("/api/menuitems/all", RestaurantData).then(res => {
//     // Save to localStorage
//     const { category } = res.data;
//     // Set token to ls
//     localStorage.setItem("category", category);
//     // Set token to Auth header
//     setAuthToken(category);
//     // Decode token to get user data
//     const decoded2 = jwt_decode(category);
//     console.log(decoded2);
//     // Set current user
//     dispatch(setCurrentUser(decoded2));
//   });
// };

export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      console.log(decoded);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem("jwtToken");
  //set Auth Header for future requests
  setAuthToken(false);
  //Clear current user
  dispatch(setCurrentUser({}));
};
