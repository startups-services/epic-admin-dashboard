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
      debugger;
      const number = getProjectNumber(action.id, state.items);
      state.items[number][action.field] = action.value;
      return;
    case 'SET_INITIAL_PROJECTS':
      state.items = action.projects;
      return;
    default:
      return state || null;
  }
});
