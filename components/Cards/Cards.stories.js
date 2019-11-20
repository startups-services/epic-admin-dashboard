import React from 'react';
import styled from '@emotion/styled';
import ProjectFonts from '../Utility/ProjectFonts';
import Card from './Card';
import ProjectBackground from '../Utility/ProjectBackground';
import IntegrationCard from './IntegrationCard';
import integrationsIndex from '../Icons/_integrationsIndex';
import ProjectCard from './ProjectCard';
import StatisticCard from './StatisticCard';
import MessageCard from './MessageCard';

export default {
  title: 'Cards',
};

const IntegrationsGrid = styled.div`
  display: flex;
  justify-content: space-between
`;

const CardContainer = styled.div`
  height: 300px;
  width: ${({ width }) => (width || '350px')};
`;

const IntegrationsContainer = styled.div`
  width: 260px;
  padding-right: 24px;
  padding-bottom: 24px;
`;

export const messageCards = () => (
  <ProjectBackground>
    <ProjectFonts>
      <CardContainer width="450px">
        <MessageCard src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg?s=200" />
      </CardContainer>
    </ProjectFonts>
  </ProjectBackground>
);

export const projectsCards = () => (
  <ProjectBackground>
    <ProjectFonts>
      <CardContainer>
        <ProjectCard label="Holo Card Products" />
      </CardContainer>
    </ProjectFonts>
  </ProjectBackground>
);

export const statisticsCards = () => (
  <ProjectBackground>
    <ProjectFonts>
      <CardContainer>
        <StatisticCard label="Adam Smith" />
      </CardContainer>
    </ProjectFonts>
  </ProjectBackground>
);

export const integrationCards = () => (
  <ProjectBackground>
    <ProjectFonts>
      <IntegrationsGrid>
        <IntegrationsContainer>
          <IntegrationCard
            label="Slack"
            src={integrationsIndex.slack}
            status="disconnected"
          />
        </IntegrationsContainer>
        <IntegrationsContainer>
          <IntegrationCard
            label="GitHub"
            src={integrationsIndex.github}
            status="connected"
          />
        </IntegrationsContainer>
        <IntegrationsContainer>
          <IntegrationCard
            label="Trello"
            src={integrationsIndex.trello}
            status="auth"
          />
        </IntegrationsContainer>
        <IntegrationsContainer>
          <IntegrationCard
            label="Slack"
            src={integrationsIndex.slack}
            status="connected"
          />
        </IntegrationsContainer>
        <IntegrationsContainer>
          <IntegrationCard
            label="Slack"
            src={integrationsIndex.slack}
            status="connected"
          />
        </IntegrationsContainer>
      </IntegrationsGrid>
    </ProjectFonts>
  </ProjectBackground>
);

export const card = () => (
  <ProjectBackground>
    <ProjectFonts>
      <Card>
        <pre>
          {`
            Tyger Tyger, burning bright,
            In the forests of the night;
            What immortal hand or eye,
            Could frame thy fearful symmetry?

            In what distant deeps or skies.
            Burnt the fire of thine eyes?
            On what wings dare he aspire?
            What the hand, dare seize the fire?

            And what shoulder, & what art,
            Could twist the sinews of thy heart?
            And when thy heart began to beat,
            What dread hand? & what dread feet?

            What the hammer? what the chain,
            In what furnace was thy brain?
            What the anvil? what dread grasp,
            Dare its deadly terrors clasp!

            When the stars threw down their spears
            And water'd heaven with their tears:
            Did he smile his work to see?
            Did he who made the Lamb make thee?

            Tyger Tyger burning bright,
            In the forests of the night:
            What immortal hand or eye,
            Dare frame thy fearful symmetry?
          `}
        </pre>
      </Card>
    </ProjectFonts>
  </ProjectBackground>
);
