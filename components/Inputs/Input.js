import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
import COLORS from '../constants';
import InputLabel from '../Labels/InputLabel';

const InputContainer = styled.div`
  display: inline-block;
  width: 100%;
`;

const InputField = styled.input`
  background: ${COLORS.white};
  border: 1px solid #E2E0E6;
  box-sizing: border-box;
  border-radius: 5px;
  height: 42px;
  padding: 13px 11px;
  width: 100%;
`;

const Input = ({ value = '', label = 'input label', onChange, type, disabled, name }) => (
  <InputContainer>
    <InputLabel>{label}</InputLabel>
    <InputField name={name} type={type} onChange={onChange} defaultValue={value} disabled={disabled} />
  </InputContainer>
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.string,
  name: PropTypes.string.isRequired,
};

Input.defaultProps = {
  type: 'text',
  disabled: false,
};

export default Input;
