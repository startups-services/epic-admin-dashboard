import React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import App from '../components/App';
import OverviewCard from '../components/Cards/OverviewCard';
import COLORS from '../components/constants';
import Card from '../components/Cards/Card';
import BigChart from '../components/Charts/BigChart';
import Label from '../components/Labels/Label';
import Table from '../components/Tables/Table';
import pageInitialData from '../components/_Utility/pageInitialData';

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

const Index = () => (
  <App>
    <>
      <LabelBox>
        <Label>
        Stats Overview
        </Label>
      </LabelBox>
      <OverviewCardBox>
        {[1, 2, 3, 4].map((elem) => (
          <CardBox key={elem}>
            <OverviewCard
              number={`${Math.floor(Math.random() * 100) + 1}K`}
              delta={`${Math.floor(Math.random() * 1000)}`}
              label="month revenue"
              increasing={elem % 2 === 0}
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
  </App>
);
Index
  .getInitialProps = async ({ reduxStore, res, req }) => pageInitialData({ reduxStore, res, req });

export default connect()(Index);
