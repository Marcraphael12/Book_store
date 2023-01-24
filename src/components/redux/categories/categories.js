// action type
const CHECK_STATUS = 'CHECK_STATUS';

// action creator
export const checkStatus = () => ({
  type: CHECK_STATUS,
});

// initial state
const initialState = [];

// reducer
const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return ['Under construction', action.payload];
    default:
      return state;
  }
};

export default categoriesReducer;
