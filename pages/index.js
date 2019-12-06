import React from 'react';
import { connect } from 'react-redux';
import App from '../components/App';
import pageInitialData from '../components/_Utility/pageInitialData';
import Dashboard from '../components/PageComponents/Dashboard';

const Index = () => (
  <App>
    <Dashboard />
  </App>
);
Index
  .getInitialProps = async ({ reduxStore, res, req }) => pageInitialData({ reduxStore, res, req });

export default connect()(Index);
