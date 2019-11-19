/* eslint-disable no-param-reassign, consistent-return */
import produce from 'immer';

const initialState = {
  isLoading: false,
  isError: false,
  data: {
    name: '',
    company: '',
    email: '',
    password: '',
  },
};

export default produce((state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_FIELD':
      state.data[action.field] = action.value;
      return;
    case 'GET_INITIAL_USER_DATA':
      state.data = action.userData;
      return;
    case 'SET_USER_NAME':
      state.data.name = action.name;
      return;
    case 'SET_USER_EMAIL':
      state.data.email = action.email;
      return;
    case 'GET_USER_COMPANY':
      state.data.company = action.company;
      return;
    default:
      return state;
  }
});
