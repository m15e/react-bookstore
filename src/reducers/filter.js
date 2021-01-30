import { CHANGE_FILTER } from "../actions/types";

const filterReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    default:
      return state;
  }
};

export default filterReducer;
