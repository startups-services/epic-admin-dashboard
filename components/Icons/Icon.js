import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import iconsIndex from './_iconsIndex';

const IconBox = styled.div`
  display: inline-flex;
`;

const Image = styled.img`
  display: flex;
  height: ${({ height }) => height || '16px'};
  width: ${({ height }) => height || '16px'};
`;

const Icon = ({ iconName = 'close', height = '16px' }) => (
  <IconBox>
    <Image height={height} src={iconsIndex[iconName]} />
  </IconBox>
);

Icon.propTypes = {
  iconName: PropTypes.string,
  height: PropTypes.string,
};

Icon.defaultProps = {
  iconName: 'close',
  height: '16px',
};

export default Icon;
