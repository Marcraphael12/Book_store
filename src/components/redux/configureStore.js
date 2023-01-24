import { configureStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import booksReducer from './books/books';

// Combine all reducers into a single reducer
const rootReducer = combineReducers({
  books: booksReducer,
});

// Create a Redux store holding the state of your app.
const store = configureStore(
  rootReducer, applyMiddleware(logger),
);

export default store;
