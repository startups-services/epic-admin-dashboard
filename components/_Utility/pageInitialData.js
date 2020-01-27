import { getInitialProjects } from '../../redux/projects/actions';
import { getAllUsers } from '../../redux/users/actions';
import auth0 from '../../auth0config';
import { getInitialUserData, upsertLoggedUser } from '../../redux/activeUser/actions';
import { setBaseUrl } from '../../data/graphql/client';

const pageInitialData = async ({ req, res, reduxStore }) => {
  await setBaseUrl(req && req.headers.host);

  if (typeof window === 'undefined') {
    const result = await auth0.getSession(req);
    if (!result) {
      res.writeHead(302, {
        Location: 'https://epic-admin-dashboard.startups-services.now.sh/api/login',
      });
      res.end();
      return {};
    }
    const { dispatch } = reduxStore;
    await dispatch(getInitialProjects(res));
    const { upsertProjectUser } = await dispatch(
      upsertLoggedUser({ email: result.user.email, name: result.user.name }),
    );
    await dispatch(getAllUsers());
    await dispatch(getInitialUserData(upsertProjectUser));

    return result.user;
  }
  return {};
};

export default pageInitialData;
