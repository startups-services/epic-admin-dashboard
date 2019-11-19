import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import COLORS from '../constants';

const ProjectBackgroundStyled = styled.div`
  background: ${COLORS.purple};
  padding: 65px;
  height: 100vh;
`;

const ProjectBackground = ({ children }) => (
  <ProjectBackgroundStyled>
    {children}
  </ProjectBackgroundStyled>
);

ProjectBackground.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProjectBackground;
