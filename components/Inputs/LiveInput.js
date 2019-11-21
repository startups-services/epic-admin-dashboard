import PropTypes from 'prop-types';
import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import Icon from '../Icons/Icon';
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
  value = '', label = 'input label', onSubmit, type, disabled, name, children,
}) => {
  const inputEl = useRef(null);
  const [isEdited, setIsEdited] = useState(false);
  const toggleLiveInput = () => { setIsEdited(!isEdited); };

  const sendData = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleLiveInput();
    if (e.target.length) {
      onSubmit(e.target[0].name, e.target[0].value);
    } else {
      onSubmit(e.target.name, e.target.value);
    }
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
          {children}
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
  onSubmit: PropTypes.func.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.string,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

LiveInput.defaultProps = {
  type: 'text',
  disabled: false,
};

export default LiveInput;
