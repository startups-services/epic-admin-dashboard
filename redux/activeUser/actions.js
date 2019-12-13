import { GET_INITIAL_USER_DATA, SET_USER_FIELD } from './constants';
import fetchQuery from '../../data/graphql/client';
import { updateUserQueries, upsertUserQ } from '../../data/graphql/User';
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
    await fetchQuery(updateUserQueries[name], { id, value });
  }
};

export const upsertLoggedUser = ({ email, name }) => async () => {
  const result = await fetchQuery(upsertUserQ, { email, name });
  return result;
};
