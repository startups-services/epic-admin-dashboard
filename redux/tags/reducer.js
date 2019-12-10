/* eslint-disable no-param-reassign, consistent-return */
import produce from 'immer';

const initialState = {
  isLoading: false,
  isError: false,
  items: [],
};

export default produce((state = initialState, action) => {
  switch (action.type) {
    case 'SET_ALL_TAGS':
      state.items = action.tags || [];
      return;
    case 'DELETE_TAG_FROM_ALL_TAGS':
      state.items = state.items.filter((elem) => elem.id !== action.id);
      return;
    case 'ADD_TAG_TO_ALL_TAGS':
      if (state.items) {
        state.items.push(action.tag);
      } else {
        state.items = [action.tag];
      }
      return;
    default:
      return state || null;
  }
});
