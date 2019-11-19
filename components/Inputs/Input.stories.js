import React, { useState } from 'react';
import Input from './Input';
import ProjectFonts from '../Utility/ProjectFonts';
import LiveEditTextArea from './TextArea';
import Card from '../Cards/Card';
import AssigneeForm from '../Forms/AssigneeForm';

export default {
  title: 'Input',
};

export const inputs = () => {
  const [state, setState] = useState('default value');
  const setValue = (e) => {
    setState(e.target.value);
  };

  return (
    <Card>
      <ProjectFonts>
        <Input value={state} onChange={setValue} label={'label for input'} />
      </ProjectFonts>

      <ProjectFonts>
        <LiveEditTextArea ideaId={'QWERTY123'} user={{}} ideaValue={''} />
      </ProjectFonts>

      <ProjectFonts>
        <AssigneeForm size={'48px'} />
      </ProjectFonts>
    </Card>
  );
};
