import React from 'react';
import { connect } from 'react-redux';
import App from '../components/App';
import { getInitialProjects } from '../redux/projects/actions';
import Projects from '../components/PageComponents/Projects';
import { isomorphicGetTokenFromCookie, isomorphicRedirectToLogin, Token } from '../data/graphql/client';

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
      await dispatch(getInitialProjects(token, res));
    }
  } else {
    isomorphicRedirectToLogin(res);
  }
  return {};
};

export default connect()(Index);
