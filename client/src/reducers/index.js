import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducers from "./profileReduces";
import menuReducers from "./menuReducers";
import guestorderReducers from "./guestorderReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducers,
  menu: menuReducers,
  guestorder: guestorderReducers
});
