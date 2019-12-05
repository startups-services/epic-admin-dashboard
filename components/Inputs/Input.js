import PropTypes from 'prop-types';
import React from 'react';
import InputLabel from '../Labels/InputLabel';
import InputContainer from './InputContainer';
import InputField from './InputField';

const Input = ({
  value = '', label = 'input label', onChange, type, disabled, name, ref,
}) => (
  <InputContainer>
    <InputLabel>{label}</InputLabel>
    <InputField
      innerRef={ref}
      ref={ref}
      name={name}
      type={type}
      onChange={onChange}
      defaultValue={value}
      disabled={disabled}
    />
  </InputContainer>
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.string,
  name: PropTypes.string.isRequired,
  ref: PropTypes.object.isRequired,
};

Input.defaultProps = {
  type: 'text',
  disabled: false,
};

export default Input;
