import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Icon from '../Icons/Icon';
import { tableActionsMsg } from '../../utils/toastActions';

const Label = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const IconBox = styled.div`
  margin-left: 15px;
`;

const ThLabel = ({ label = '', sortable = false }) => (
  <Label onClick={tableActionsMsg}>
    <span>{label}</span>
    {sortable && (
      <IconBox>
        <Icon iconName="upDown" />
      </IconBox>
    )}
  </Label>
);

ThLabel.propTypes = {
  label: PropTypes.string,
  sortable: PropTypes.bool,
};

ThLabel.defaultProps = {
  label: '',
  sortable: false,
};

export default ThLabel;
