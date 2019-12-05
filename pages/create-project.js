import React from 'react';
import { connect } from 'react-redux';
import App from '../components/App';
import Card from '../components/Cards/Card';
import pageInitialData from '../components/_Utility/pageInitialData';
import CreateProject from '../components/Forms/CreateProject';
import Label from '../components/Labels/Label';
import { LabelBox } from './index';

const Index = () => (
  <App>
    <LabelBox>
      <Label>
        Create your project
      </Label>
    </LabelBox>
    <Card alignSelf="center" justifyContent="flex-start">
      <CreateProject />
    </Card>
  </App>
);
Index
  .getInitialProps = async ({ reduxStore, res, req }) => pageInitialData({ reduxStore, res, req });

export default connect()(Index);
