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

const GetABook = () => async (dispatch) => {
  const result = await fetch(URL);
  const data = await result.json();

  const books = Object.entries(data).map(([id, bookData]) => {
    const { title, category } = bookData[0];
    return {
      item_id: id,
      title,
      category,
    };
  });

  dispatch(getBook(books));
};

const RemoveABook = (id) => async (dispatch) => {
  const result = await fetch(`${URL}/${id}`, {
    method: 'DELETE',
  });
  console.log(result);
  dispatch(removeBook(id));
};

export { AddABook, GetABook, RemoveABook };
