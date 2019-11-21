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
  reduxStore: { dispatch, getState }, res, req,
}) => {
  const tokenCookie = isomorphicGetTokenFromCookie(req);
  if (tokenCookie) {
    const token = Token.checkAndUpdateToken(tokenCookie);
    const result = await dispatch(getInitialProjects(token, res));
  } else {
    isomorphicRedirectToLogin(res);
  }
  
  console.log(getState());
  debugger;
  //PAVLIK 2 it this line we have store too. You may check it by getState()
  return {};
};

export default withRedux(Index);
