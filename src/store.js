import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import booksReducer from "./reducers/books";
// import rootReducer from "./reducers";

const initialState = {
  bookOne: {
    id: 1,
    title: "Thinking Fast and Slow",
    category: "Action",
  },
  bookTwo: {
    id: 2,
    title: "Thinking Slow",
    category: "Manga",
  },
  bookThree: {
    id: 3,
    title: "Slow",
    category: "Action",
  },
};

const middleware = [thunk];

const store = createStore(
  //rootReducer,
  booksReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
