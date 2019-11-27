import React from 'react';
import ProjectFonts from '../_Utility/ProjectFonts';
import Card from '../Cards/Card';
import ProjectBackground from '../_Utility/ProjectBackground';
import ProjectStatus from './ProjectStatus';
import IntegrationsStatus from './IntegrationsStatus';
import ProgressBar from './ProgressBar';

export default {
  title: 'Project Status',
};

export const Status = () => (
  <ProjectFonts>
    <ProjectBackground>
      <Card>
        <ProgressBar percent={0} />
        <br />
        <ProgressBar percent={34} />
        <br />
        <ProgressBar percent={66} />
        <br />
        <ProgressBar percent={100} />
        <br />
        <ProjectStatus status="progress" />
        <br />
        <ProjectStatus status="completed" />
        <br />
        <ProjectStatus status="pending" />
        <br />
        <ProjectStatus status="canceled" />
        <br />
        <IntegrationsStatus status="synced" />
        <br />
        <IntegrationsStatus status="inactive" />
        <br />
      </Card>
    </ProjectBackground>
  </ProjectFonts>
);
