/* eslint-disable no-param-reassign, consistent-return */
import produce from 'immer';

const initialState = {
  isLoading: false,
  isError: false,
  items: [],
};

export default produce((state = initialState, action) => {
  switch (action.type) {
    case 'GET_INITIAL_PROJECTS':
      state.items = action.projects;
      return;
    default:
      return state || null;
  }
});

