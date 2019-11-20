import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Icon from '../Icons/Icon';

const Label = styled.span`
  display: flex;
  align-items: center;
`;

const IconBox = styled.div`
  margin-left: 15px;
`;

const ThLabel = ({ label = '', sortable = false }) => (
  <Label>
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
