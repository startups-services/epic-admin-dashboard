import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Card from './Card';
import Icon from '../Icons/Icon';
import COLORS from '../constants';


const OverviewCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OverviewCardNumber = styled.div`
  height: 56px;
  font-size: 48px;
  line-height: 56px;
`;

const OverviewCardLabel = styled.div`
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.25px;
  padding-bottom: 35px;
`;

const ImageBox = styled.div`
  padding-top: 20px;
  padding-bottom: 30px;
`;

const Number = styled.div`
  color: ${({ color }) => color};
  padding-left: 5px;
`;

const Delta = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 25px;
`;

const IconArea = styled.div`
  height: 48px;
  width: 48px;
  border-radius: 19px;
  background-color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
`;


const OverviewCard = ({
  iconName, number, label, delta, increasing = false, backgroundColor = COLORS.gray2,
}) => (
  <Card>
    <OverviewCardStyled>
      <ImageBox>
        <IconArea color={backgroundColor}>
          <Icon iconName={iconName} height="20px" />
        </IconArea>
      </ImageBox>
      <OverviewCardNumber>
        {number}
      </OverviewCardNumber>
      <OverviewCardLabel>
        {label}
      </OverviewCardLabel>
      <Delta>
        {increasing ? (
          <>
            <Icon iconName="upRectangle" height="7px" />
            <Number color={COLORS.green2}>{delta}</Number>
          </>
        ) : (
          <>
            <Icon iconName="downRectangle" height="7px" />
            <Number color={COLORS.red}>{delta}</Number>
          </>
        )}
      </Delta>
    </OverviewCardStyled>
  </Card>
);

OverviewCard.propTypes = {
  iconName: PropTypes.string.isRequired,
  delta: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  increasing: PropTypes.bool,
  backgroundColor: PropTypes.string,
};

OverviewCard.defaultProps = {
  increasing: false,
  backgroundColor: COLORS.gray2,
};

export default OverviewCard;
