import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Card from './Card';
import IntegrationsStatus from '../Statuses/IntegrationsStatus';
import Button from '../Buttons/Button';

const IntegrationCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const IntegrationLabel = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.177778px;
  padding-bottom: 10px;
`;

const ImageBox = styled.div`
  padding-top: 20px;
  padding-bottom: 30px;
  & img {
    height: 48px;
    width: auto;
  }
`;

const StatusBox = styled.div`
  padding-bottom: 60px;
`;

const statuses = {
  connected: {
    integration: 'synced',
    buttonColor: '#F4F7FC',
    buttonLabel: 'Disconnect',
  },
  auth: {
    integration: 'inactive',
    buttonColor: '#DCFAF0',
    buttonLabel: 'Authenticate',
  },
  disconnected: {
    integration: 'inactive',
    buttonColor: '#FBF0DD',
    buttonLabel: 'Connect',
  },
};

const IntegrationCard = ({
  src, status = 'connected', label, onClick,
}) => {
  IntegrationCard.propTypes = {};

  return (
    <Card>
      <IntegrationCardStyled>
        <ImageBox>
          <img src={src} alt="label" />
        </ImageBox>
        <IntegrationLabel>
          {label}
        </IntegrationLabel>
        <StatusBox>
          <IntegrationsStatus status={statuses[status].integration} />
        </StatusBox>
        <Button bordered={false} background={statuses[status].buttonColor} onClick={onClick}>
          {statuses[status].buttonLabel}
        </Button>
      </IntegrationCardStyled>
    </Card>
  );
};

IntegrationCard.propTypes = {
  src: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default IntegrationCard;
