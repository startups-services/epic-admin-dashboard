import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import md5 from 'md5';

const UserAvatarContainer = styled.div`
  display: inline-flex;
  justify-content: left;
  align-items: center;
  cursor: pointer;
`;

const UserAvatarStyled = styled.img`
  border-radius: ${({ square, size, borderRadius }) => (square ? borderRadius : size)};
  height: ${({ size }) => (size || '16px')};
  width: ${({ size }) => (size || '16px')};
`;

const UserName = styled.div`
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.4px;
  margin-left: 8px;
`;

const UserAvatar = ({
  square = false, size = '16px', name, borderRadius = '16px', email = '', onClick = () => {}, title,
}) => (
  <UserAvatarContainer onClick={onClick}>
    <UserAvatarStyled
      borderRadius={borderRadius}
      size={size}
      square={square}
      style={{ display: 'flex' }}
      src={`https://secure.gravatar.com/avatar/${
        md5(email.trim().toLocaleLowerCase())
      }?s=120&d=retro`}
      title={title || email}
    />
    {(name) && (
      <UserName>
        {name}
      </UserName>
    )}
  </UserAvatarContainer>
);

UserAvatar.propTypes = {
  name: PropTypes.string,
  square: PropTypes.bool,
  size: PropTypes.string,
  borderRadius: PropTypes.string,
  email: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  title: PropTypes.string,
};

UserAvatar.defaultProps = {
  square: false,
  size: '16px',
  borderRadius: '16px',
  name: undefined,
  onClick: () => {},
  title: '',
};

export default UserAvatar;
