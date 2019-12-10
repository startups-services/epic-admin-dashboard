import PropTypes from 'prop-types';
import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import Icon from '../Icons/Icon';
import InputLabel from '../Labels/InputLabel';
import InputContainer from './InputContainer';
import InputField from './InputField';

const EditButton = styled.div`
  cursor: pointer;
  margin-left: 25px;
`;

const LiveInputLabel = styled.div`
  display: flex;
  align-items: center;
`;

const LiveInput = ({
  value = '', label = 'input label', onSubmit, type, disabled, name, children, showLabel = false,
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
        <>
          {showLabel && <InputLabel>{label}</InputLabel>}
          <LiveInputLabel>
            {children}
            <EditButton onClick={toggleLiveInput} tabIndex={0} onKeyPress={toggleLiveInput}>
              <Icon height="16px" iconName="edit" />
            </EditButton>
          </LiveInputLabel>
        </>
      )}
    </>
  );
};

LiveInput.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  showLabel: PropTypes.bool,
};

LiveInput.defaultProps = {
  type: 'text',
  disabled: false,
  showLabel: false,
};

export default LiveInput;
