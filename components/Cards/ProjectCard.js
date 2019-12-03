import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Card, { cardBoardRadius, cardPadding } from './Card';
import Button from '../Buttons/Button';
import ProjectStatus from '../Statuses/ProjectStatus';
import UsersAvatarsGroup from '../Avatars/UsersAvatarsGroup';
import Label from '../Labels/Label';
import Tags from '../Tags/Tags';
import COLORS from '../constants';
import { htmlOnlyMsg } from '../../utils/toastActions';

const IntegrationCardStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectDescription = styled.div`
  font-size: 12px;
  line-height: 17px;
  /* or 142% */
  padding-bottom: 10px;
  letter-spacing: 0.4px;
`;

const TopImage = styled.img`
  width: calc(100% + ${cardPadding} + ${cardPadding});
  margin-top: -${cardPadding};
  margin-left: -${cardPadding};
  border-top-left-radius: ${cardBoardRadius};
  border-top-right-radius: ${cardBoardRadius};
  padding-bottom: 20px;
  height: unset;
`;

const LabelBox = styled.div`
  padding-bottom: 15px;
`;

const UsersAvatarsGroupBox = styled.div`
  padding-bottom: 7px;
`;

const ProjectStatusBox = styled.div`
  padding-bottom: 30px;
`;

const ButtonBox = styled.span`
  padding-top: 35px;
  & button {
     width: 100%;
  }
`;

const ProjectCard = ({
  status = 'completed', label, tags, src, description = '', users, id,
}) => (
  <Card>
    <TopImage src={src} />
    <IntegrationCardStyled>
      <LabelBox>
        <Label>
          <Link href="/project/[id]" as={`/project/${id}`}>
            {label}
          </Link>
        </Label>
      </LabelBox>
      <UsersAvatarsGroupBox>
        <UsersAvatarsGroup userArray={users} />
      </UsersAvatarsGroupBox>
      <ProjectStatusBox>
        <ProjectStatus status={status} />
      </ProjectStatusBox>
      <ProjectDescription dangerouslySetInnerHTML={{ __html: description }} />
      <div>
        <Tags tags={tags} />
      </div>
      <ButtonBox>
        <Button bordered={false} background={COLORS.orange1} onClick={htmlOnlyMsg}>
          Level up
        </Button>
      </ButtonBox>
    </IntegrationCardStyled>
  </Card>
);

ProjectCard.propTypes = {
  status: PropTypes.string,
  label: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  src: PropTypes.string,
  description: PropTypes.string,
  users: PropTypes.array,
  id: PropTypes.string.isRequired,
};

ProjectCard.defaultProps = {
  status: 'completed',
  description: '',
  users: [],
  src: '',
};

export default ProjectCard;
