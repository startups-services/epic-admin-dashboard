import React from 'react';
import styled from '@emotion/styled';
import App from '../components/App';
import OverviewCard from '../components/Cards/OverviewCard';
import COLORS from '../components/constants';
import Card from '../components/Cards/Card';
import BigChart from '../components/Charts/BigChart';
import Label from '../components/Labels/Label';
import Table from '../components/Tables/Table';

const LabelBox = styled.div`
  margin-bottom: 30px;
`;

const OverviewCardBox = styled.div`
  margin-bottom: 60px;
`;

const ElemBox = styled.div`
  margin-bottom: 60px;
`;

const CardBox = styled.div`
  min-width: 260px;
  width: calc(25% - 18px) ;
  display: inline-block;
  margin: 0 24px 24px 0;
  & :last-child {
    margin: 0 0 24px 0;
  }
`;


const Index = () => (
  <App>
    <LabelBox>
      <Label>
        Stats Overview
      </Label>
    </LabelBox>
    <OverviewCardBox>
      {[false, true, false, true].map(elem =>
        <CardBox>
          <OverviewCard
            number={`${Math.floor(Math.random() * 100) + 1}K`}
            delta={`${Math.floor(Math.random() * 1000)}`}
            label={'month revenue'}
            increasing={elem}
            iconName={'user'}
            backgroundColor={COLORS.green1}
          />
        </CardBox>,
      )}
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
  </App>
);

export default Index;
