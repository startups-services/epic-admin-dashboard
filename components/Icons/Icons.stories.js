import React from 'react';
import PropTypes from 'prop-types';
import ProjectFonts from '../_Utility/ProjectFonts';
import ProjectBackground from '../_Utility/ProjectBackground';
import Card from '../Cards/Card';

import Icon from './Icon';
import iconsIndex from './_iconsIndex';

export default {
  title: 'Icons',
};

const PresentableIconContainer = ({ iconName }) => (
  <div style={{ padding: '10px' }}>
    <Icon iconName={iconName} />
    <span style={{ paddingLeft: '20px' }}>{iconName}</span>
  </div>
);

PresentableIconContainer.propTypes = {
  iconName: PropTypes.string.isRequired,
};

export const icons = () => (
  <ProjectBackground>
    <ProjectFonts>
      <Card>
        <div>
          {Object.keys(iconsIndex).sort((a, b) => ((a > b) ? 1 : -1)).map((name) => (
            <PresentableIconContainer key={name} iconName={name} />
          ))}
        </div>
      </Card>
    </ProjectFonts>
  </ProjectBackground>
);
