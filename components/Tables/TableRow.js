import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import ProjectAvatar from '../Avatars/ProjectAvatar';
import ProjectStatus from '../Statuses/ProjectStatus';
import UsersAvatarsGroup from '../Avatars/UsersAvatarsGroup';
import Icon from '../Icons/Icon';
import ProgressBar from '../Statuses/ProgressBar';

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

const TableRow = ({
  avatarLabel, name, status, userArray, costs, percent,
}) => (
  <tr>
    <TdStyled>
      <ProjectAvatar label={avatarLabel} />
    </TdStyled>
    <TdStyled>{name}</TdStyled>
    <TdStyled>
      <ProjectStatus status={status} />
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
        <Icon iconName="details" />
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
  percent: PropTypes.number.isRequired,
};

export default TableRow;
