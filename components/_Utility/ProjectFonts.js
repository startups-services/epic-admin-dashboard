import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ProjectFontsStyle = styled.div`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.25px;
  color: #272626;
  margin-bottom: 30px;
  & :focus {
    outline: unset;
  }
`;

const ProjectFonts = ({ children }) => (
  <>
    <ProjectFontsStyle>
      {children}
    </ProjectFontsStyle>
  </>
);

ProjectFonts.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProjectFonts;
