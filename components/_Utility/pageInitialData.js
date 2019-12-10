import { getInitialProjects } from '../../redux/projects/actions';
import { getAllUsers } from '../../redux/users/actions';
import auth0 from '../../utils/auth0';
import { getInitialUserData } from '../../redux/activeUser/actions';

const pageInitialData = async ({ req, res, reduxStore }) => {
  if (typeof window === 'undefined') {
    const result = await auth0.getSession(req);
    if (!result) {
      res.writeHead(302, {
        Location: '/api/login',
      });
      res.end();
      return;
    }
    const { dispatch } = reduxStore;
    await dispatch(getInitialProjects(res));
    await dispatch(getAllUsers());
    await dispatch(getInitialUserData(result.user));

    return result.user;
  }
  return {};
};

export default pageInitialData;
