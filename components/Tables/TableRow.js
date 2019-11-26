import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Link from 'next/link';
import ProjectAvatar from '../Avatars/ProjectAvatar';
import ProjectStatus from '../Statuses/ProjectStatus';
import UsersAvatarsGroup from '../Avatars/UsersAvatarsGroup';
import ProgressBar from '../Statuses/ProgressBar';
import ProjectActions from '../Inputs/ProjectActions';

const TdStyled = styled.td`
  padding: 14px 0;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  border-bottom: 1px solid rgba(56, 41, 82, 0.05);
`;

const IconBox = styled.span`
  cursor: pointer;
`;
const ProgressBarBox = styled.div`
  width: 75%;
`;

const LinkConatainer = styled.div`
  text-decoration: unset;
  
  & * {
    text-decoration: unset;
    color: black;
  }
`;

const TableRow = ({
  avatarLabel, name, status, userArray, costs, percent, id,
}) => (
  <tr>
    <TdStyled>
      <ProjectAvatar label={avatarLabel} />
    </TdStyled>
    <TdStyled>
      <LinkConatainer>
        <Link href="/project/[id]" as={`/project/${id}`}>
          {name}
        </Link>
      </LinkConatainer>
    </TdStyled>
    <TdStyled>
      <ProjectStatus status={status} key={`status${name}`} />
    </TdStyled>
    <TdStyled>
      <ProgressBarBox>
        <ProgressBar percent={percent} />
      </ProgressBarBox>
    </TdStyled>
    <TdStyled>
      <UsersAvatarsGroup userArray={userArray} />
    </TdStyled>
    <TdStyled>{costs}</TdStyled>
    <TdStyled>
      <IconBox>
        <ProjectActions />
      </IconBox>
    </TdStyled>
  </tr>
);

TableRow.propTypes = {
  avatarLabel: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  userArray: PropTypes.array.isRequired,
  costs: PropTypes.string.isRequired,
  percent: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default TableRow;
