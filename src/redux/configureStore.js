import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

// Combine all reducers into a single reducer
const reducer = combineReducers({
  booksReducer,
  categoriesReducer,
});

const middlewares = [logger, thunk];

// Create a Redux store holding the state of your app.
const store = configureStore(
  { reducer }, applyMiddleware(...middlewares),
);

export default store;
