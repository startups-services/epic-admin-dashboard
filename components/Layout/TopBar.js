import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import COLORS from '../constants';
import { contentPadding } from './Content';
import Icon from '../Icons/Icon';
import UserAvatar from '../Avatars/UserAvatar';
import StatusIcon from '../Statuses/StatusIcon';
import { topDocumentPadding } from '../_Utility/constants';
import { htmlOnlyMsg } from '../../utils/toastActions';

const TopBarStyled = styled.div`
  background-color: ${COLORS.white};
  grid-column-start: 2;
  grid-column-end: span 1;
  grid-row-start: 1;
  grid-row-end: span 1;
  padding: 0 ${contentPadding} 0px ${contentPadding};
  display: flex;
  justify-content: space-between;
`;

const Logotype = styled.div`
  display: inline-flex;
  padding-top: ${topDocumentPadding};
  cursor: pointer;
`;

const LogoLabel = styled.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 1.25px;
  margin-left: 23px;
`;

const TopLeftMenu = styled.div`
  display: flex;
  align-items: center;
`;

const AvaBox = styled.div`
  position: relative;
  margin-right: 8px;
  &:last-child {
    margin-right: 0;
  }
`;

const IconBox = styled.div`
  margin-right: 26px;
  position: relative;
  cursor: pointer;
`;


const TopBar = () => {
  const users = useSelector((store) => store.users.items);
  return (
    <TopBarStyled>
      <Logotype onClick={htmlOnlyMsg}>
        <Icon iconName="logo" height="16px" />
        <LogoLabel>
          Epic Admin Dashboard
        </LogoLabel>
      </Logotype>
      <TopLeftMenu>
        <IconBox onClick={htmlOnlyMsg}>
          <Icon iconName="bell" />
          <StatusIcon color={COLORS.red} />
        </IconBox>
        {users.length && users.map((elem) => (
          <AvaBox key={elem.email} onClick={htmlOnlyMsg}>
            <UserAvatar
              email={elem.email}
              square
              borderRadius="10px"
              size="26px"
              title={elem.name}
            />
            <StatusIcon color={COLORS.green2} />
          </AvaBox>

        ))}
      </TopLeftMenu>
    </TopBarStyled>
  );
};

export default TopBar;
