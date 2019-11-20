import PropTypes from 'prop-types';
import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import Label from '../Labels/Label';
import Icon from '../Icons/Icon';
import Input from './Input';
import InputLabel from '../Labels/InputLabel';
import COLORS from '../constants';
import InputContainer from './InputContainer';

const EditButton = styled.div`
  cursor: pointer;
  margin-left: 25px;
`;

const LiveInputLabel = styled.div`
  display: flex;
  align-items: center;
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


const LiveInput = ({
  value = '', label = 'input label', onSubmit, type, disabled, name,
}) => {
  const inputEl = useRef(null);
  const [isEdited, setIsEdited] = useState(false);
  const toggleLiveInput = () => { setIsEdited(!isEdited); };

  const sendData = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleLiveInput();
    onSubmit(e.target[0].name, e.target[0].value);
  };

  useEffect(() => {
    if (!inputEl.current) return;
    inputEl.current.focus();
  }, [isEdited]);

  return (
    <>
      {isEdited ? (
        <InputContainer>
          <form onBlur={sendData} onSubmit={sendData}>
            <InputLabel>{label}</InputLabel>
            <InputField
              ref={inputEl}
              name={name}
              type={type}
              defaultValue={value}
              disabled={disabled}
            />
          </form>
        </InputContainer>
      ) : (
        <LiveInputLabel>
          <Label>
            {value}
          </Label>
          <EditButton onClick={toggleLiveInput}>
            <Icon height="16px" iconName="edit" />
          </EditButton>
        </LiveInputLabel>
      )}
    </>
  );
};

LiveInput.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.string,
  name: PropTypes.string.isRequired,
};

LiveInput.defaultProps = {
  type: 'text',
  disabled: false,
};

export default LiveInput;
