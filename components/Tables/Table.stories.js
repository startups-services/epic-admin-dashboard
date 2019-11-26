import React from 'react';
import ProjectFonts from '../_Utility/ProjectFonts';
import Table from './Table';
import Card from '../Cards/Card';
import ProjectBackground from '../_Utility/ProjectBackground';

export default {
  title: 'Tables',
};

export const table = () => (
  <ProjectFonts>
    <ProjectBackground>
      <Card>
        <Table />
      </Card>
    </ProjectBackground>
  </ProjectFonts>
);
