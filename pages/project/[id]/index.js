import React from 'react';
import execQuery,
{ isomorphicGetTokenFromCookie, isomorphicRedirectToLogin, Token }
  from '../../../data/graphql/client';
import App from '../../../components/App';
import Card from '../../../components/Cards/Card';
import ProjectDetails from '../../../components/Forms/ProjectDetails';
import { getProjectsQuery } from '../../../data/graphql';
import withRedux from '../../../redux/_lib/withRedux';
import { getInitialProjects } from '../../../redux/projects/actions';

const Index = props => (
  <App>
    <Card>
      <ProjectDetails props={props} />
    </Card>
  </App>
);

Index.getInitialProps = async ({ reduxStore, res, req, query, ...other }) => {
  const tokenCookie = isomorphicGetTokenFromCookie(req);

  if (tokenCookie) {
    const token = Token.checkAndUpdateToken(tokenCookie, res);
    if (token) {
      const { dispatch } = reduxStore;
      const projects = await execQuery(getProjectsQuery);
      const result = await dispatch(getInitialProjects(projects.allProjects));

      const selectedProject = result.projects.find(elem =>
        elem.id === query.id,
      );
      return (selectedProject);
    }
  } else {
    isomorphicRedirectToLogin(res);
  }

  return {};
};

export default withRedux(Index);

