import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import UserAvatar from '../Avatars/UserAvatar';

const UserName = styled.div`
  margin: 0 10px 0 10px;
`;

const DefaultAssigneeItemStyled = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const DefaultAssigneeItem = ({ name }) => (
  <DefaultAssigneeItemStyled>
    <UserAvatar
      src={`https://secure.gravatar.com/avatar/ac59a8c${Math.floor(Math.random() * 101)}1f2f64f6d3f329610c3aed?s=48&d=retro`} /* eslint-disable-line max-len */
      size="48px"
    />
    <UserName>
      {name}
    </UserName>
  </DefaultAssigneeItemStyled>
);

DefaultAssigneeItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default DefaultAssigneeItem;
