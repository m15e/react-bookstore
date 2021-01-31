import { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER } from './types';

export const createBook = book => ({
  type: CREATE_BOOK,
  payload: book,
});

export const removeBook = id => ({
  type: REMOVE_BOOK,
  payload: id,
});

export const changeFilter = filter => ({
  type: CHANGE_FILTER,
  payload: filter,
});
