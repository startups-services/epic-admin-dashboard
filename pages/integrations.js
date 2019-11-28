import React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import App from '../components/App';
import IntegrationCard from '../components/Cards/IntegrationCard';
import integrationsIndex from '../components/Icons/_integrationsIndex';
import Button from '../components/Buttons/Button';
import pageInitialData from '../components/_Utility/pageInitialData';
import { htmlOnlyMsg } from '../utils/toastActions';

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
          label="Slack"
          src={integrationsIndex.slack}
          status="connected"
          onClick={htmlOnlyMsg}
          key={1}
        />
      </IntegrationsContainer>
      <IntegrationsContainer>
        <IntegrationCard
          label="Trello"
          src={integrationsIndex.trello}
          status="auth"
          onClick={htmlOnlyMsg}
          key={2}
        />
      </IntegrationsContainer>
      <IntegrationsContainer>
        <IntegrationCard
          label="Google Analytics"
          src={integrationsIndex.googleAnalytics}
          status="disconnected"
          onClick={htmlOnlyMsg}
          key={3}
        />
      </IntegrationsContainer>
      <IntegrationsContainer>
        <IntegrationCard
          label="Google Sheets"
          src={integrationsIndex.googleSheets}
          status="connected"
          onClick={htmlOnlyMsg}
          key={4}
        />
      </IntegrationsContainer>
    </CardsBox>
    <ButtonBox>
      <Button onClick={htmlOnlyMsg}>Add new integrations</Button>
    </ButtonBox>
  </App>
);

Index
  .getInitialProps = async ({ reduxStore, res, req }) => pageInitialData({ reduxStore, res, req });

export default connect()(Index);
