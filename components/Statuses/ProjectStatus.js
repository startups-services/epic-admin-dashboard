import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import ProgressIcon from '../Icons/ProgressIcon';
import COLORS from '../constants';


export const statuses = {
  completed: {
    color: COLORS.green2,
    name: 'completed',
    key: 'completed',
  },
  progress: {
    color: COLORS.orange1,
    name: 'in progress',
    key: 'progress',
  },
  pending: {
    color: COLORS.green1,
    name: 'pending',
    key: 'pending',
  },
  canceled: {
    color: COLORS.red,
    name: 'canceled',
    key: 'canceled',
  },
};

const Label = styled.div`
  display: inline-block;
`;

const ProjectStatus = ({ status = 'completed' }) => (
  <>
    <div style={{ display: 'flex', alignItems: 'center', height: '16px' }}>
      <ProgressIcon
        color={statuses[status] ? statuses[status].color : COLORS.red}
        status={status}
      />
      <Label>
        {statuses[status] ? statuses[status].name : 'progress error!'}
      </Label>
    </div>
  </>
);

ProjectStatus.propTypes = {
  status: PropTypes.string.isRequired,
};

export default ProjectStatus;
