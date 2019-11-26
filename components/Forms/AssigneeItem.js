import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import md5 from 'md5';
import UserAvatar from '../Avatars/UserAvatar';

const UserName = styled.div`
  margin: 0 10px 0 10px;
`;

const AssigneeItemStyled = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const AssigneeItem = ({ name, email="" }) => (
  <AssigneeItemStyled>
    <UserAvatar
      size="40px"
      src={`https://secure.gravatar.com/avatar/${
        md5(email.trim().toLocaleLowerCase())
      }?s=120&d=retro`}
    />
    <UserName>
      {name}
    </UserName>
  </AssigneeItemStyled>
);

AssigneeItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default AssigneeItem;
