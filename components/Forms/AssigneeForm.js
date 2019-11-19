import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Select, { components } from 'react-select';
import Icon from '../Icons/Icon';
import customStyles from './selectCustomStyles';

const Placeholder = props => <components.Placeholder {...props} />;

const AssigneeFormStyled = styled.div`
  display: inline-block;
  cursor: pointer;
  & div[class*="-control"] > div { // fix strange div without any classes
    padding: 0;
  }
  & div[class*="-container"]:focus {
    outline: unset;
  }
  & * :focus {
    outline: unset;
  }
  :focus {
    outline: unset;
  }
  & div[class*="-singleValue"] div[class*="-UserName"] { // hide single name from chosen user
    display: none;
  }

`;

const AssigneeForm = ({ size = '48px', ...rest }) => (
  <AssigneeFormStyled>
    <Select
      // defaultMenuIsOpen
      isSearchable={false}
      defaultValue={null}
      isClearable
      components={{ Placeholder }}
      placeholder={
        <Icon iconName={'addNewUser'} height={size} />
      }
      styles={customStyles}
      {...rest}
    />
  </AssigneeFormStyled>
);
AssigneeForm.propTypes = {
  size: PropTypes.string.isRequired,
  ...Select.propTypes,
};

export default AssigneeForm;
