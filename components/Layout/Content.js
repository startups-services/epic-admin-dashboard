import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import COLORS from '../constants';

export const contentPadding = '65px';

const ContentStyled = styled.div`
  padding: ${contentPadding};
  background: ${COLORS.purple};
`;

const Content = props => (
  <ContentStyled>
    {props.children}
  </ContentStyled>
);

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
