import { v4 as uuid } from 'uuid';

// Define constants
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const initialState = [
  {
    id: uuid(),
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
  },
];

// Actions for adding and removing books
const addBook = (book) => (
  {
    type: ADD_BOOK,
    payload: book,
  }
);

const removeBook = (id) => (
  {
    type: REMOVE_BOOK,
    id,
  }
);

// Create reducer
const BooksReducer = (bookState = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...bookState,
        action.payload,
      ];
    case REMOVE_BOOK:
      return [...bookState.filter((item) => item.id !== action.id)];
    default:
      return bookState;
  }
};

export default BooksReducer;
export { removeBook, addBook };
