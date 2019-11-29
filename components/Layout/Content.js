import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import COLORS from '../constants';

export const contentPadding = '65px';

const ContentStyled = styled.div`
  padding-left: ${contentPadding};
  padding-right: ${contentPadding};
  padding-top: 30px;
  background: ${COLORS.purple};
`;

const Content = ({ children }) => (
  <ContentStyled>
    {children}
  </ContentStyled>
);

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
