// action types
const ADDBOOK = '';
const REMOVEBOOK = '';

// our initial state
const initialState = [];

// Action creators
export const AddBook = (payload) => ({
  type: ADDBOOK,
  payload,
});

export const RemoveBook = (payload) => ({
  type: REMOVEBOOK,
  payload,
});

// our reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDBOOK:
      return [...state, action.payload];
    case REMOVEBOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
