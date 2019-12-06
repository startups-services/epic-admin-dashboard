import React from 'react';
import styled from '@emotion/styled';
import Label from '../Labels/Label';
import OverviewCard from '../Cards/OverviewCard';
import COLORS from '../constants';
import Card from '../Cards/Card';
import BigChart from '../Charts/BigChart';
import Table from '../Tables/Table';

const SpaceBetweenCards = 12;

export const LabelBox = styled.div`
  margin-bottom: 30px;
`;

const OverviewCardBox = styled.div`
  margin-bottom: 60px;
  display: flex;
  flex-wrap: wrap;
  margin-left: -${SpaceBetweenCards}px;
  margin-right: -${SpaceBetweenCards}px;
`;

const ElemBox = styled.div`
  margin-bottom: 60px;
`;

const CardBox = styled.div`
  min-width: 200px;
  width: auto;
  flex-grow: 1;
  display: flex;
  margin: ${SpaceBetweenCards}px;
`;


const Dashboard = () => (
  <>
    <LabelBox>
      <Label>
        Stats Overview
      </Label>
    </LabelBox>
    <OverviewCardBox>
      {[false, true, false, true].map((elem) => (
        <CardBox>
          <OverviewCard
            number={`${Math.floor(Math.random() * 100) + 1}K`}
            delta={`${Math.floor(Math.random() * 1000)}`}
            label="month revenue"
            increasing={elem}
            iconName="user"
            backgroundColor={COLORS.green1}
          />
        </CardBox>
      ))}
    </OverviewCardBox>
    <LabelBox>
      <Label>
        Charts
      </Label>
    </LabelBox>
    <ElemBox>
      <Card>
        <BigChart />
      </Card>
    </ElemBox>
    <LabelBox>
      <Label>
        Management
      </Label>
    </LabelBox>
    <Card>
      <Table />
    </Card>
  </>
);

export default Dashboard;
