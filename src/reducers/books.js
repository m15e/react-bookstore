import { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER } from "../actions/types";

const booksReducer = (state, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter(book => book.id !== action.payload),
      };
    case CHANGE_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default booksReducer;
