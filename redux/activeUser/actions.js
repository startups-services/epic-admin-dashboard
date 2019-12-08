import { GET_INITIAL_USER_DATA, SET_USER_FIELD } from './constants';
import execQuery from '../../data/graphql/client';
import { updateUserQueries } from '../../data/graphql/User';
import { realDataMsg } from '../../utils/toastActions';

export const getInitialUserData = (userData) => ({
  type: GET_INITIAL_USER_DATA,
  userData,
});


export const setUserFieldRedux = (field, value) => ({
  type: SET_USER_FIELD,
  field,
  value,
});

export const setUserField = (name, value) => async (dispatch, getState) => {
  if (value || value === false || value === 0) {
    realDataMsg();
    dispatch(setUserFieldRedux(name, value));
    const { activeUser: { data: { id } } } = getState();
    await execQuery(updateUserQueries[name], { id, value });
  }
};
