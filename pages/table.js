import React from 'react';
import { connect } from 'react-redux';
import App from '../components/App';
import Card from '../components/Cards/Card';
import Table from '../components/Tables/Table';
import pageInitialData from '../components/_Utility/pageInitialData';

const Index = () => (
  <App>
    <Card>
      <Table />
    </Card>
  </App>
);

Index
  .getInitialProps = async ({ reduxStore, res, req }) => pageInitialData({ reduxStore, res, req });

export default connect()(Index);
