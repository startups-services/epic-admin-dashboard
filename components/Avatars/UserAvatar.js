import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const UserAvatarContainer = styled.div`
  display: inline-flex;
  justify-content: left;
  align-items: center;
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

const UserAvatar = ({ square = false, size = '16px', name, src, borderRadius = '16px' }) =>
  <UserAvatarContainer>
    <UserAvatarStyled
      borderRadius={borderRadius}
      size={size}
      square={square}
      style={{ display: 'flex' }}
      src={src}
    />
    {(name) && (
      <UserName>
        {name}
      </UserName>
    )}
  </UserAvatarContainer>;

UserAvatar.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string,
  square: PropTypes.bool,
  size: PropTypes.string,
  borderRadius: PropTypes.string,
};

UserAvatar.defaultProps = {
  square: false,
  size: '16px',
  borderRadius: '16px',
  name: undefined,
};

export default UserAvatar;
