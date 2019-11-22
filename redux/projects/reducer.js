/* eslint-disable no-param-reassign, consistent-return */
import produce from 'immer';

const initialState = {
  isLoading: false,
  isError: false,
  items: [],
};

const getProjectNumber = (id, projects) => projects.findIndex((elem) => elem.id === id);

export default produce((state = initialState, action) => {
  switch (action.type) {
    case 'SET_PROJECT_FIELD':
      state.items[getProjectNumber(action.id, state.items)][action.field] = action.value;
      return;
    case 'ADD_TAG_TO_PROJECT':


      state.items[getProjectNumber(action.id, state.items)].tags.push(action.tag);
      return;
    case 'SET_INITIAL_PROJECTS':
      state.items = action.projects;
      return;
    default:
      return state || null;
  }
});
