/* eslint-disable no-param-reassign, consistent-return */
import produce from 'immer';

const initialState = {
  isLoading: false,
  isError: false,
  items: [],
};

export default produce((state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_TAGS':
      state.items = action.tags;
      return;
    default:
      return state || null;
  }
});

