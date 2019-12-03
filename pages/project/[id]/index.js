import React from 'react';
import { connect } from 'react-redux';
import App from '../../../components/App';
import Card from '../../../components/Cards/Card';
import ProjectDetails from '../../../components/Forms/ProjectDetails';
import pageInitialData from '../../../components/_Utility/pageInitialData';

const Index = () => (
  <App>
    <Card>
      <ProjectDetails />
    </Card>
  </App>
);
Index
  .getInitialProps = async ({ reduxStore, res, req }) => pageInitialData({ reduxStore, res, req });

export default connect()(Index);
