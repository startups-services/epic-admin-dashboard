import React from 'react';
import { connect } from 'react-redux';
import App from '../components/App';
import pageInitialData from '../components/_Utility/pageInitialData';

const Index = () => (
  <App>
    <h1>Contacts</h1>
  </App>
);
Index
  .getInitialProps = async ({ reduxStore, res, req }) => pageInitialData({ reduxStore, res, req });

export default connect()(Index);
