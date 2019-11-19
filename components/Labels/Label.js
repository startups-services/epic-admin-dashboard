import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import COLORS from '../constants';

const LabelStyled = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.177778px;
  text-decoration: unset;
  color: ${COLORS.black};

  & * {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.177778px;
    text-decoration: unset;
    color: ${COLORS.black}
  }
`;

const Label = ({ children }) => (
  <LabelStyled>
    {children}
  </LabelStyled>
);

Label.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Label;
