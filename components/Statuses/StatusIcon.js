import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';


const StatusIconStyled = styled.div`
  height: 6px;
  width: 6px;
  border-radius: 6px;
  background-color: ${({ color }) => `${color}`};
  position: absolute;
  right: 0;
  bottom: 2px;
`;

const StatusIcon = ({ color }) => (
  <StatusIconStyled color={color} />
);

StatusIcon.propTypes = {
  color: PropTypes.string.isRequired,
};

export default StatusIcon;
