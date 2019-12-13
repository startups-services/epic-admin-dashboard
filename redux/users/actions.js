import { SET_USERS } from './constatns';
import fetchQuery from '../../data/graphql/client';
import { getAllUsersQ } from '../../data/graphql/User';

export const setAllUsers = (users) => ({
  type: SET_USERS,
  users,
});

export const getAllUsers = () => async (dispatch) => {
  try {
    const { projectUsers } = await fetchQuery(getAllUsersQ);
    dispatch(setAllUsers(projectUsers));
    return projectUsers;
  } catch (e) {
    console.log(e); // eslint-disable-line no-console
    return null;
  }
};
