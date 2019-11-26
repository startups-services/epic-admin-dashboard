import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

import COLORS from '../constants';
import ProjectFonts from '../_Utility/ProjectFonts';

import ToggleCheckBox from '../Inputs/ToggleCheckBox';

export default {
  title: 'Button',
};

export const buttons = () => {
  const [state, setState] = useState(false);

  return (
    <ProjectFonts>
      <Button onClick={action('clicked')}>Modify locations</Button>
      <Button onClick={action('clicked')} background={COLORS.green1} bordered={false}>Level Up</Button>
      <Button onClick={action('clicked')} background={COLORS.purple} bordered={false}>Level Up</Button>
      <Button onClick={action('clicked')} background={COLORS.orange1} bordered={false}>Level Up</Button>

      <br />
      <br />
      <br />
      <ToggleCheckBox state={state} setState={setState} onChange={action('toggled!')} checked />
    </ProjectFonts>
  );
};
