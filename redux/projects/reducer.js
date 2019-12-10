/* eslint-disable no-param-reassign, consistent-return */
import produce from 'immer';
import findProjectIndex from '../_lib/findProjById';

const initialState = {
  isLoading: false,
  isError: false,
  items: [],
};

export default produce((state = initialState, action) => {
  switch (action.type) {
    case 'SET_PROJECT_FIELD':
      state.items[findProjectIndex(action.id, state.items)][action.field] = action.value;
      return;
    case 'ADD_TAG_TO_PROJECT':
      if (state.items[findProjectIndex(action.id, state.items)].tags) {
        state.items[findProjectIndex(action.id, state.items)].tags.push(action.tag);
      } else {
        state.items[findProjectIndex(action.id, state.items)].tags = [action.tag];
      }
      return;
    case 'SET_INITIAL_PROJECTS':
      state.items = action.projects;
      return;
    default:
      return state || null;
  }
});
