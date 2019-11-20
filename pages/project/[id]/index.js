import React from 'react';
import { isomorphicGetTokenFromCookie, isomorphicRedirectToLogin, Token } from '../../../data/graphql/client';
import App from '../../../components/App';
import Card from '../../../components/Cards/Card';
import ProjectDetails from '../../../components/Forms/ProjectDetails';
import withRedux from '../../../redux/_lib/withRedux';
import { getInitialProjects } from '../../../redux/projects/actions';

const Index = () => (
  <App>
    <Card>
      <ProjectDetails />
    </Card>
  </App>
);
Index.getInitialProps = async ({
  reduxStore: { dispatch }, res, req,
}) => {
  const tokenCookie = isomorphicGetTokenFromCookie(req);

  if (tokenCookie) {
    const token = Token.checkAndUpdateToken(tokenCookie);
    await dispatch(getInitialProjects(token));
  } else {
    isomorphicRedirectToLogin(res);
  }

  return {};
};

export default withRedux(Index);
