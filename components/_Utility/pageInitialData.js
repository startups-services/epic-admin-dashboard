import { isomorphicGetTokenFromCookie, isomorphicRedirectToLogin, Token } from '../../data/graphql/client';
import { getInitialProjects } from '../../redux/projects/actions';
import { getAllUsers } from '../../redux/users/actions';
import { checkCurrUser } from '../../redux/activeUser/actions';

const pageInitialData = async ({ reduxStore, req, res }) => {
  const tokenCookie = isomorphicGetTokenFromCookie(req);
  const { dispatch } = reduxStore;

  if (tokenCookie) {
    const token = Token.checkAndUpdateToken(tokenCookie);
    dispatch(checkCurrUser(token));
    if (token) {
      await dispatch(getInitialProjects(token, res));
      await dispatch(getAllUsers());
    }
  } else {
    isomorphicRedirectToLogin(res);
  }
  return {};
};

export default pageInitialData;
