import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import App from '../components/App';
import Card from '../components/Cards/Card';
import CustomizedCalendar from '../components/Calendar/Calendar';
import COLORS from '../components/constants';
import pageInitialData from '../components/_Utility/pageInitialData';

const users = [
  {
    id: 1,
    name: 'Adam Smith',
    src: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg?s=16',
  },
  {
    id: 2,
    name: 'Kevin Randell',
    src: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg?s=16',
  },
  {
    id: 3,
    name: 'Tomas Edison',
    src: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg?s=16',
  },
];

const events = [
  {
    start: moment().subtract(5, 'days').toDate(),
    end: moment().add(2, 'days').toDate(),
    resourceId: 1,
    resource: {
      background: COLORS.green1,
      color: COLORS.green2,
      text: 'LOGO INC',
    },
  },
  {
    start: moment().subtract(10, 'days').toDate(),
    end: moment().add(10, 'days').toDate(),
    resourceId: 1,
    resource: {
      background: COLORS.pink2,
      color: COLORS.red,
      text: 'Schedule app',
    },
  },
  {
    start: moment({ hour: 5, minute: 10, seconds: 20 }).toDate(),
    end: moment({ hour: 5, minute: 10, seconds: 20 }).add(3, 'hours').toDate(),
    resourceId: 2,
    resource: {
      background: COLORS.pink2,
      color: COLORS.pink,
      text: 'Architect book',
    },
  },
  {
    start: moment({ hour: 7, minute: 10, seconds: 20 }).toDate(),
    end: moment({ hour: 22, minute: 10, seconds: 20 }).toDate(),
    resourceId: 1,
    resource: {
      background: COLORS.orange1,
      color: COLORS.orange2,
      text: 'Create web design',
    },
  },
];

const Index = () => (
  <App>
    <Card>
      <CustomizedCalendar users={users} events={events} />
    </Card>
  </App>
);

Index
  .getInitialProps = async ({ reduxStore, res, req }) => pageInitialData({ reduxStore, res, req });

export default connect()(Index);
