import Router from 'next/router';
import { GET_INITIAL_USER_DATA, SET_USER_FIELD } from './constants';
import execQuery, { Token } from '../../data/graphql/client';
import { getActiveUser, updateUserQueries } from '../../data/graphql/User';
import { realDataMsg } from '../../utils/toastActions';

export const getInitialUserData = (userData) => ({
  type: GET_INITIAL_USER_DATA,
  userData,
});

export const checkCurrUser = (token) => async (dispatch) => {
  if (token) {
    Token.checkAndUpdateToken(token);
    const data = await execQuery(getActiveUser);
    if (data) {
      dispatch(getInitialUserData(data.user));
    } else {
      await Router.push('/login');
      return false;
    }
  } else {
    await Router.push('/login');
    return false;
  }
  return true;
};

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
