import React from 'react';
import styled from '@emotion/styled';
import 'chartjs-plugin-style';
import Card from './Card';
import UserAvatar from '../Avatars/UserAvatar';
import Icon from '../Icons/Icon';
import Label from '../Labels/Label';
import SubLabel from '../Labels/SubLabel';
import StatisticsChart from '../Charts/StatisticsChart';

const IntegrationCardStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 25px;
`;

const LabelBox = styled.div`
  padding-bottom: 20px;
`;

const SubLabelBox = styled.div`
  padding-bottom: 20px;
`;

const ChartBox = styled.div`
  margin: 0 -20px -20px -20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
`;

const labels = ['Mon', 'Tue', 'Wen', 'Tru', 'Fri', 'Sun', 'Sat'];
const values = [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55];

const StatisticCard = () => (
  <Card>
    <IntegrationCardStyled>
      <TopBox>
        <UserAvatar
          email="test@test.ru"
          square
          size="48px"
        />
        <Icon iconName="details" />
      </TopBox>
      <LabelBox>
        <Label>
          Adam Smith
        </Label>
      </LabelBox>
      <SubLabelBox>
        <SubLabel>
          manager
        </SubLabel>
      </SubLabelBox>
    </IntegrationCardStyled>
    <ChartBox>
      <StatisticsChart labels={labels} values={values} />
    </ChartBox>
  </Card>
);

export default StatisticCard;
