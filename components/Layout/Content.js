import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import COLORS from '../constants';

export const contentPadding = '65px';

const ContentStyled = styled.div`
  padding: 30px ${contentPadding} ${contentPadding} ${contentPadding};
  background: ${COLORS.purple};
  display: flex;
  flex-direction: column;
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
