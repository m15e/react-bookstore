import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import rootReducer from "./reducers";
import booksReducer from "./reducers/books";

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

const middleware = [thunk];

const store = createStore(
  //rootReducer,
  booksReducer,
  initialState
  // compose(
  //   applyMiddleware(...middleware),
  //   /* eslint-disable */
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
);

export default store;
