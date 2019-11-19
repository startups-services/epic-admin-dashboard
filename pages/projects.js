import React from 'react';
import App from '../components/App';
import withRedux from '../redux/_lib/withRedux';
import { getInitialProjects } from '../redux/projects/actions';
import Projects from '../components/PageComponents/Projects';
import { getProjectsQuery } from '../data/graphql';
import execQuery, { isomorphicGetTokenFromCookie, isomorphicRedirectToLogin, Token } from '../data/graphql/client';

const Index = () => (
  <App>
    <Projects />
  </App>
);

Index.getInitialProps = async ({ reduxStore, res, req }) => {
  const tokenCookie = isomorphicGetTokenFromCookie(req);

  if (tokenCookie) {
    const token = Token.checkAndUpdateToken(tokenCookie);
    if (token) {
      const { dispatch } = reduxStore;
      const projects = await execQuery(getProjectsQuery);
      await dispatch(getInitialProjects(projects.allProjects));
    }
  } else {
    isomorphicRedirectToLogin(res);
  }
  return {};
};

export default withRedux(Index);
