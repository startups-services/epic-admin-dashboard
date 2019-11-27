import React from 'react';
import App from '../components/App';
import Card from '../components/Cards/Card';
import UserEditForm from '../components/Forms/UserEditForm';

const Index = () => (
  <App>
    <Card>
      <UserEditForm />
    </Card>
  </App>
);

export default Index;
