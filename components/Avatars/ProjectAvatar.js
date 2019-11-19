import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import COLORS from '../constants';

const iconWidth = '16px';

const ProjectIconLabel = styled.div`
  font-weight: normal;
  font-size: 8px;
  line-height: 9px;
  width: ${iconWidth};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectIconContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ProjectAvatar = ({ label = '', color = COLORS.pink }) => {
  const ProjectIconStyled = styled.div`
    background-color: ${color};
    color: #fff;
    width: ${iconWidth};
    height: ${iconWidth};
    border-radius: ${iconWidth};
    display: flex;
  `;

  return (
    <ProjectIconContainer>
      <ProjectIconStyled>
        <ProjectIconLabel>
          {label}
        </ProjectIconLabel>
      </ProjectIconStyled>
    </ProjectIconContainer>
  );
};

ProjectAvatar.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
};

ProjectAvatar.defaultProps = {
  label: 'label',
  color: COLORS.pink,
};

export default ProjectAvatar;
