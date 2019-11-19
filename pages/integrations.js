import React from 'react';
import styled from '@emotion/styled';
import { action } from '@storybook/addon-actions';
import App from '../components/App';
import IntegrationCard from '../components/Cards/IntegrationCard';
import integrationsIndex from '../components/Icons/_integrationsIndex';
import Button from '../components/Buttons/Button';

const IntegrationsContainer = styled.div`
  width: 260px;
  padding-right: 24px;
  display: inline-block;
  padding-bottom: 24px;
`;

const CardsBox = styled.div`
  margin-bottom: 41px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Index = () => (
  <App>
    <CardsBox>
      <IntegrationsContainer>
        <IntegrationCard
          label={'Slack'}
          src={integrationsIndex.slack}
          status={'connected'}
          onClick={() => {}}
          key={1}
        />
      </IntegrationsContainer>
      <IntegrationsContainer>
        <IntegrationCard
          label={'Trello'}
          src={integrationsIndex.trello}
          status={'auth'}
          onClick={() => {}}
          key={2}
        />
      </IntegrationsContainer>
      <IntegrationsContainer>
        <IntegrationCard
          label={'Google Analytics'}
          src={integrationsIndex.googleAnalytics}
          status={'disconnected'}
          onClick={() => {}}
          key={3}
        />
      </IntegrationsContainer>
      <IntegrationsContainer>
        <IntegrationCard
          label={'Google Sheets'}
          src={integrationsIndex.googleSheets}
          status={'connected'}
          onClick={() => {}}
          key={4}
        />
      </IntegrationsContainer>
    </CardsBox>
    <ButtonBox>
      <Button onClick={action('clicked')}>Add new integrations</Button>
    </ButtonBox>
  </App>
);

export default Index;
