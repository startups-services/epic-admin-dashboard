import React from 'react';
import styled from '@emotion/styled';
import LeftBarLink from './LeftBarLink';
import COLORS from '../constants';

const LeftBarNavMenuStyled = styled.div`
  background-color: ${COLORS.white};
  grid-column-start: 1;
  grid-column-end: span 1;
  grid-row-start: 2;
  grid-row-end: span 1;
  border-right: 1px solid ${COLORS.gray2};
  padding: 24px 0 0 22px;
`;

export default function LeftBarNavMenu() {
  return (
    <LeftBarNavMenuStyled>
      <LeftBarLink href="/" iconName="dashboard" label="Dash Home" dropDown />
      <LeftBarLink href="/projects" iconName="project" label="Projects" />
      <LeftBarLink href="/integrations" iconName="integrations" label="Integrations" />
      <LeftBarLink href="/table" iconName="table" label="Table" />
      <LeftBarLink href="/calendar" iconName="calendar" label="Calendar" />
      <LeftBarLink href="/user-edit" iconName="user" label="User edit" />
    </LeftBarNavMenuStyled>
  );
}
