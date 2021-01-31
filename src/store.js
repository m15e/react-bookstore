import { createStore } from "redux";
import booksReducer from "./reducers/books";
import rootReducer from "./reducers";

const initialState = {
  books: [
    {
      id: 1,
      title: "Thinking Fast and Slow",
      category: "Learning",
    },
    {
      id: 2,
      title: "A land before time",
      category: "Action",
    },
    {
      id: 3,
      title: "Sapiens",
      category: "History",
    },
  ],
  filter: "All",
};

const store = createStore(rootReducer, initialState);

export default store;
