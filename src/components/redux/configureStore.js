import { configureStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import booksReducer from './books/books';

// Combine all reducers into a single reducer
const reducer = combineReducers({
  reducer: booksReducer,
});

// Create a Redux store holding the state of your app.
const store = configureStore(
  { reducer }, applyMiddleware(logger),
);

export default store;
