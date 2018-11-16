import { ADD_ITEM, REMOVE_ITEM, CLEAR_ORDER } from "../actions/types";

const initialState = {
  items: [],
  text: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case REMOVE_ITEM:
      const items = state.items;
      const rmItemIndex = items.findIndex(
        item => item._id !== action.payload._id
      );
      items.splice(rmItemIndex, 1);
      return {
        ...state,
        items: items
      };
    case CLEAR_ORDER:
      return initialState;
    default:
      return state;
  }
}
