import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Icon from '../Icons/Icon';
import DateInput from '../Inputs/DatePicker';

const DateBox = styled.div`
  display: flex;
  align-items: center;
  & div[class*="-IconBox"] {
    margin-right: 10px;
  }
`;

const Dates = ({
  firstDate, secondDate, setFirstDate, setSecondDate,
}) => (
  <DateBox>
    <Icon iconName="calendarGreen" />
    <DateInput date={Date.parse(firstDate)} setDate={setFirstDate} maxDate={Date.parse(secondDate)} />
    <DateInput date={Date.parse(secondDate)} setDate={setSecondDate} minDate={Date.parse(firstDate)} />
  </DateBox>
);

Dates.propTypes = {
  firstDate: PropTypes.string,
  secondDate: PropTypes.string,
  setFirstDate: PropTypes.func.isRequired,
  setSecondDate: PropTypes.func.isRequired,
};

Dates.defaultProps = {
  firstDate: undefined,
  secondDate: undefined,
};

export default Dates;
