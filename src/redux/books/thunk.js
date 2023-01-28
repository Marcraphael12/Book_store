/* eslint-disable no-unused-vars */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getBooksAction, addBookAction, removeBookAction } from './books';

const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Nf6SeYddxW75X78pxU1n/books/';

export const getBooks = () => async (dispatch) => {
  const res = await fetch(API);
  const data = await res.json();

  const books = Object.entries(data).map(([id, bookData]) => {
    const { category, title } = bookData[0];
    return {
      item_id: id,
      category,
      title,
    };
  });
  dispatch(getBooksAction(books));
};

export const addBook = (book) => async (dispatch) => {
  const res = await fetch(API, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  });
  dispatch(addBookAction(book));
};

export const removeBook = (id) => async (dispatch) => {
  const res = await fetch(`${API}${id}`, {
    method: 'DELETE',
  });

  dispatch(removeBookAction(id));
};
