import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import UserAvatar from '../Avatars/UserAvatar';

const UserName = styled.div`
  margin: 0 10px 0 10px;
`;

const AssigneeItemStyled = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const AssigneeItem = ({ name, email = '' }) => (
  <AssigneeItemStyled>
    <UserAvatar
      size="48px"
      email={email}
    />
    <UserName>
      {name}
    </UserName>
  </AssigneeItemStyled>
);

AssigneeItem.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default AssigneeItem;
