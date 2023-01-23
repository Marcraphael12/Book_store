// Action type
const CHECKSTATUS = 'CHECKSTATUS';

// Initial state of
const initialState = [];

// Action creator
export const CheckStatus = (payload) => ({
  type: CHECKSTATUS,
  payload,
});

// Reducer
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKSTATUS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default categoriesReducer;
