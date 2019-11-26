import React from 'react';
import { connect } from 'react-redux';
import App from '../components/App';
import Projects from '../components/PageComponents/Projects';
import pageInitialData from '../components/_Utility/pageInitialData';

const Index = () => (
  <App>
    <Projects />
  </App>
);

Index
  .getInitialProps = async ({ reduxStore, res, req }) => pageInitialData({ reduxStore, res, req });

export default connect()(Index);
