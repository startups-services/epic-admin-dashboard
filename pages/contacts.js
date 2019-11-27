import React from 'react';
import App from '../components/App';
import pageInitialData from '../components/_Utility/pageInitialData';

const Index = () => (
  <App>
    <h1>Contacts</h1>
  </App>
);
Index
  .getInitialProps = async ({ reduxStore, res, req }) => pageInitialData({ reduxStore, res, req });

export default Index;
