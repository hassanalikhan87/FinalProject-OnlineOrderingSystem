import { GET_MENU, MENU_LOADING, CLEAR_CURRENT_MENU } from "../actions/types";

const initialState = {
  MENU: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MENU_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_MENU:
      return {
        ...state,
        MENU: action.payload,
        loading: false
      };
    case CLEAR_CURRENT_MENU:
      return {
        ...state,
        MENU: null
      };
    default:
      return state;
  }
}
