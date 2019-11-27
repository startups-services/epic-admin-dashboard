import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import UserAvatar from './UserAvatar';

const UsersAvatarGroupStyled = styled.div`
  padding-left: 2px;
`;

const UserAvaContainer = styled.div`
  margin-right: -2px;
  display: inline-block;
`;

const UsersAvatarsGroup = ({ userArray }) => (
  <UsersAvatarGroupStyled>
    {userArray.map(((user) => (
      <UserAvaContainer key={user.name ? user.name : user.email}>
        <UserAvatar email={user.email} />
      </UserAvaContainer>
    )
    ))}
  </UsersAvatarGroupStyled>
);

UsersAvatarsGroup.propTypes = {
  userArray: PropTypes.array.isRequired,
};

export default UsersAvatarsGroup;
