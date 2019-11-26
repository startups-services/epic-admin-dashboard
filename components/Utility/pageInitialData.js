import { isomorphicGetTokenFromCookie, isomorphicRedirectToLogin, Token } from '../../data/graphql/client';
import { getInitialProjects } from '../../redux/projects/actions';

const pageInitialData = async ({ reduxStore, req, res }) => {
  const tokenCookie = isomorphicGetTokenFromCookie(req);

  if (tokenCookie) {
    const token = Token.checkAndUpdateToken(tokenCookie);
    if (token) {
      const { dispatch } = reduxStore;
      await dispatch(getInitialProjects(token, res));
    }
  } else {
    isomorphicRedirectToLogin(res);
  }
  return {};
};

export default pageInitialData;
