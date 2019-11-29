import React from 'react';
import { connect } from 'react-redux';
import App from '../components/App';
import Card from '../components/Cards/Card';
import pageInitialData from '../components/_Utility/pageInitialData';
import CreateProject from '../components/Forms/CreateProject';

const Index = () => (
  <App>
    <Card>
      <CreateProject />
    </Card>
  </App>
);
Index
  .getInitialProps = async ({ reduxStore, res, req }) => pageInitialData({ reduxStore, res, req });

export default connect()(Index);
