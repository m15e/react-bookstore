import { CREATE_BOOK, REMOVE_BOOK } from "../actions/types";

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state.books, action.payload];
    case REMOVE_BOOK:
      return state.books.filter(book => book.id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
