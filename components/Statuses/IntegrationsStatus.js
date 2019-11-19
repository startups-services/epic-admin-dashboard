import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icons/Icon';
import COLORS from '../constants';

const statuses = {
  synced: {
    label: 'synced',
    icon: 'check',
    buttonColor: COLORS.purple,
    buttonLabel: 'Disconnect',
  },
  inactive: {
    label: 'inactive',
    icon: 'inactive',
    buttonColor: COLORS.green1,
    buttonLabel: 'Authenticate',
  },
};

const IntegrationsStatus = ({ status = 'inactive' }) => (
  <div style={{ display: 'flex', alignItems: 'center', height: '16px' }}>
    <Icon iconName={statuses[status].icon} />
    <div style={{ display: 'inline-block', paddingLeft: '5px' }}>
      {statuses[status] ? statuses[status].label : 'progress error!'}
    </div>
  </div>
);

IntegrationsStatus.propTypes = {
  status: PropTypes.string,
};

IntegrationsStatus.defaultProps = {
  status: 'inactive',
};

export default IntegrationsStatus;
