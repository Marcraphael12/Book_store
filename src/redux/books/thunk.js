import { getBook, addBook, removeBook } from './books';

const ID = 'Nf6SeYddxW75X78pxU1n';
const URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${ID}/books`;

const AddABook = (book) => async (dispatch) => {
  const result = await fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  });
  console.log(result);
  dispatch(addBook(book));
};
