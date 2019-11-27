import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import COLORS from '../constants';
import InputContainer from './InputContainer';

const SelectLabel = styled.div`
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 1.5px;
  color: #272626;
  text-transform: uppercase;
  mix-blend-mode: normal;
  opacity: 0.5;
  margin-bottom: 6px;
`;

const Label = styled.select`
  background: ${COLORS.white};
  border: 1px solid #E2E0E6;
  box-sizing: border-box;
  border-radius: 5px;
  height: 42px;
  padding: 13px 11px;
  width: 100%;
`;

const Select = ({
  options = [], label = 'input label', onChange, name, defaultValue,
}) => (
  <InputContainer>
    <SelectLabel>{label}</SelectLabel>
    <Label onChange={onChange} name={name}>
      {options.map((elem) => (
        <option key={`${elem.value}`} value={elem.value} selected={defaultValue === elem.value}>
          {elem.name}
        </option>
      ))}
    </Label>
  </InputContainer>
);

Select.propTypes = {
  options: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.any.isRequired,
};

export default Select;
