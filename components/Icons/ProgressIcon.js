import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import COLORS from '../constants';

const ProgressIconStyled = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 16px;
  padding-right: 6px;
`;

const ProgressIcon = ({ color = COLORS.red }) => (
  <ProgressIconStyled>
    <svg width="6" height="6" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0
        2.32843 0.671573 3 1.5 3Z"
        fill={color}
      />
    </svg>
  </ProgressIconStyled>
);

ProgressIcon.propTypes = {
  color: PropTypes.string,
};

ProgressIcon.defaultProps = {
  color: COLORS.red,
};

export default ProgressIcon;
