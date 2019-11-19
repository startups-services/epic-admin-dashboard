import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import COLORS from '../constants';

const Label = styled.div`
  & .react-toggle-track {
    background-color: ${COLORS.red};
  }
  & .react-toggle--checked .react-toggle-track {
    background-color: ${COLORS.green3};
  }
  & .react-toggle-thumb {
    border: none;
  }
  & .react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
    background-color: ${COLORS.red};
  }
  & .react-toggle--checked:hover:not(.react-toggle--disabled) .react-toggle-track {
    background-color: ${COLORS.green3};
  }
`;

const ToggleCheckBox = ({ checked, name, onChange }) => (
  <Label>
    <Toggle
      name={name}
      checked={checked}
      icons={false}
      onChange={onChange}
    />
  </Label>
);

ToggleCheckBox.propTypes = {
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

ToggleCheckBox.defaultProps = {
  name: 'toggle-check-box',
};

export default ToggleCheckBox;
