import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import styled from '@emotion/styled';
import COLORS from '../constants';

const DatePickerStyled = styled.div`
  & .react-datepicker {
    border: none;
  }

  & .react-datepicker__header {
    background: none;
  }
  & .react-datepicker__day-name {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.25px;

    color: ${COLORS.green3};
  }
  & .react-datepicker__current-month {
    margin-bottom: 30px;
  }
  & .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
    margin: 10px;
  }
  & .react-datepicker__month-container {
    box-shadow: 0 10px 10px rgba(198,203,207,0.25265);
    border-radius: 20px;
    border: none;
  }
  & .react-datepicker__input-container > input {
      border: 1px solid ${COLORS.blue1};
      box-sizing: border-box;
      border-radius: 5px;
      height: 42px;
      padding: 13px 11px;
      width: 120px;
      text-align: center;
  }

`;

const DateInput = ({
  date, setDate, minDate, maxDate,
}) => (
  <DatePickerStyled>
    <DatePicker
      selected={date}
      onChange={setDate}
      locale="en"
      dateFormat="dd/MM/yyyy"
      minDate={minDate}
      maxDate={maxDate}
    />
  </DatePickerStyled>
);

DateInput.propTypes = {
  date: PropTypes.string.isRequired,
  setDate: PropTypes.func.isRequired,
  minDate: PropTypes.string,
  maxDate: PropTypes.string,
};

DateInput.defaultProps = {
  minDate: undefined,
  maxDate: undefined,
};

export default DateInput;
