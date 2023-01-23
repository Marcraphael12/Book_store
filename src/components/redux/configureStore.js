import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import Logger from 'redux-logger';

import bookReducer from './books/books';

const combineReducer = combineReducers({
  // Reducers
  book: bookReducer,
});

// Create store
const store = configureStore(
  combineReducer, applyMiddleware(Logger),
);

export default store;
