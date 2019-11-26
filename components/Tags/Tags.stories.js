import React from 'react';
import { action } from '@storybook/addon-actions';
import ProjectFonts from '../_Utility/ProjectFonts';
import Tag from './Tag';

export default {
  title: 'Tags',
};

export const tags = () => (
  <ProjectFonts>
    <Tag label="#ModifyLocations" onClick={action('clicked')} />
  </ProjectFonts>
);
