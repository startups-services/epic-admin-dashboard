import React from 'react';
import Select from 'react-select';
import styled from '@emotion/styled';
import Icon from '../Icons/Icon';
import { htmlOnlyMsg } from '../../utils/toastActions';

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ProjectActionsContainer = styled.div`
  cursor: pointer;
`;

const getActionButton = (iconName, label) => (
  <ActionContainer>
    <Icon iconName={iconName} />
    &nbsp;
    {label}
  </ActionContainer>
);

const customStyles = {
  option: (provided) => ({
    ...provided, cursor: 'pointer', width: '150px',
  }),
  container: (provided) => ({
    ...provided, border: 'none', focusable: 'false',
  }),
  control: (provided) => ({
    ...provided, border: 'none', cursor: 'pointer', padding: 'none', minHeight: 'none', boxShadow: 'unset',

  }),
  clearIndicator: (provided) => ({
    ...provided, display: 'none',
  }),
  indicatorSeparator: (provided) => ({
    ...provided, display: 'none',
  }),
  dropdownIndicator: (provided) => ({
    ...provided, display: 'none',
  }),
  placeholder: (provided) => ({
    ...provided, top: 'none', transform: 'none', position: 'none', margin: 0, display: 'flex',
  }),
  menu: (provided) => ({
    ...provided, width: 'none',
  }),
  singleValue: (provided) => ({
    ...provided, top: 'none', transform: 'none', position: 'none', margin: 0, display: 'flex', maxWidth: 'none',
  }),
  input: (provided) => ({
    ...provided, // display: 'none',
  }),
};

const ProjectActions = () => (
  <ProjectActionsContainer>
    <Select
      isSearchable={false}
      options={
          [
            {
              value: 3,
              label: getActionButton('attachment', 'Add attachments'),
            },
            {
              value: 4,
              label: getActionButton('arrow', 'Move up'),
            },
            {
              value: 5,
              label: getActionButton('subscribe', 'Subscribe'),
            },
            {
              value: 6,
              label: getActionButton('archive', 'Archive'),
            },
          ]
        }
      value={{
        value: 0,
        label: <Icon iconName="details" />,
      }}
      onChange={htmlOnlyMsg}
      styles={customStyles}
    />
  </ProjectActionsContainer>
);
export default ProjectActions;
