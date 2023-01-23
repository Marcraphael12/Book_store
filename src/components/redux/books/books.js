const Add_Book = '';
const Remove_Book = '';

// our initial state
const initialState = [];

// our reducers
const AddBook = (payload) => ({
  type: Add_Book,
  payload,
});

const RemoveBook = (payload) => ({
  type: Remove_Book,
  payload,
});
