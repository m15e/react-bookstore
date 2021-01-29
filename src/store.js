import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './reducers/books';
// import rootReducer from "./reducers";

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 1000),
      title: 'Thinking Fast and Slow',
      category: 'Learning',
    },
    {
      id: Math.floor(Math.random() * 1000),
      title: 'A land before time',
      category: 'Action',
    },
    {
      id: Math.floor(Math.random() * 1000),
      title: 'Sapiens',
      category: 'History',
    },
  ],
};

const middleware = [thunk];

const store = createStore(
  // rootReducer, - uncomment if project eventually requires multiple reducers
  booksReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    /* eslint-disable no-underscore-dangle  */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
