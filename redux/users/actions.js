import { SET_USERS } from './constatns';
import execQuery from '../../data/graphql/client';
import { getAllUsersQ } from '../../data/graphql/User';

export const setAllUsers = (users) => ({
  type: SET_USERS,
  users,
});

export const getAllUsers = () => async (dispatch) => {
  try {
    const { allUsers } = await execQuery(getAllUsersQ);
    dispatch(setAllUsers(allUsers));
    return allUsers;
  } catch (e) {
    console.log(e);
  }
};
