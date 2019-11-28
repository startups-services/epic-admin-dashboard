import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Card from './Card';
import COLORS from '../constants';
import UserAvatar from '../Avatars/UserAvatar';
import SubLabel from '../Labels/SubLabel';
import MessageButton from '../Buttons/MessageButton';
import Icon from '../Icons/Icon';
import { htmlOnlyMsg } from '../../utils/toastActions';

const MessageCardStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectDescription = styled.div`
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
  padding-bottom: 10px;
  letter-spacing: 0.4px;
`;

const TopBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 25px;
`;

const ButtonsBox = styled.div`
  display: flex;
  & button {
    margin-right: 10px;
  }
  & :last-child {
    margin-right: 0;
  }
`;

const MessageCard = ({ email }) => (
  <Card>
    <MessageCardStyled>
      <TopBox>
        <UserAvatar
          email={email}
          name="Adam Smith"
          size="26px"
          onClick={htmlOnlyMsg}
        />
        <ButtonsBox>
          <MessageButton
            background={COLORS.green1}
            textColor={COLORS.green2}
            onClick={htmlOnlyMsg}
          >
            2
            {' '}
            <Icon iconName="attachmentGreen" />
          </MessageButton>
          <MessageButton
            dateString="17 Apr"
            background={COLORS.orange1}
            textColor={COLORS.orange2}
            onClick={htmlOnlyMsg}
          >
            17 replies
          </MessageButton>
          <MessageButton
            dateString="17 Apr"
            background={COLORS.purple}
            textColor={COLORS.gray}
            onClick={htmlOnlyMsg}
          >
            17 Apr
          </MessageButton>
        </ButtonsBox>
      </TopBox>
      <ProjectDescription>
        Wherein sixth light. Multiply shall. Blessed male made divide set second a evening greater
      </ProjectDescription>
      <SubLabel>
        2 hours ago
      </SubLabel>
    </MessageCardStyled>
  </Card>
);

MessageCard.propTypes = {
  email: PropTypes.string.isRequired,
};

export default MessageCard;
