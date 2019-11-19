import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';

const SubLabelStyled = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height */

  letter-spacing: 0.4px;

  color: #272626;

  mix-blend-mode: normal;
  opacity: 0.5;
`;

const SubLabel = ({ children }) => (
  <SubLabelStyled>
    {children}
  </SubLabelStyled>
);

SubLabel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SubLabel;
