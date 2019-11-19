import styled from '@emotion/styled';
import COLORS from '../constants';

const CustomizedCalendarStyled = styled.div`
  & .rbc-calendar {
    height: calc(100vh - 65px - 65px - 70px - 40px);
  }

  & .rbc-event {
    padding: 0;
    background-color: unset;
  }

  & .rbc-event-label {
    color: black;
  }

  & .rbc-header {
    border: none;
  }

  & .rbc-month-view {
    border: none;

    & .rbc-header {
      font-style: normal;
      font-weight: 500;
      font-size: 10px;
      line-height: 12px;
      letter-spacing: 1.5px;

      text-align: left;
      padding: unset;
      text-transform: uppercase;
      margin-bottom: 23px;
    }
    & .rbc-date-cell {
      text-align: left;
      font-weight: normal;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.4px;
      padding-left: 8px;
    }
    & .rbc-day-bg + .rbc-day-bg,
      .rbc-month-row + .rbc-month-row {
        border-color: rgba(56, 41, 82, 0.05);
    }
    & .rbc-off-range-bg {
      background: none;
    }
    & .rbc-row-segment {
      padding-bottom: 2px;
    }
    & .rbc-today {
      background-color: ${COLORS.gray3};
    }
    & .rbc-btn-group {
      width: 180px;
    }

  }

  & .rbc-time-view {
    border: none;

    & .rbc-time-header {
      margin-top: 10px;
    }

    & * {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.25px;
    }

    & .rbc-event-label {
      display: none;
    }

    & div[class*="-CustomizedEvent"] {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.25px;
      margin: 0 20px 0 20px;
    }

    & .rbc-events-container div[class*="-CustomizedEvent"] { // fix strange div without any classes
      height: 100%;
      padding: 20px;
    }

    & .rbc-time-content {
      border: none;
    }

    & .rbc-timeslot-group {
      border-top: 1px solid ${COLORS.gray4};
      border-bottom: unset;
    }

    & .rbc-time-header {
      margin-bottom: 35px;
    }

    & .rbc-time-content > * + * > * {  // vertical lines for time table
      border-left: none;
    }
    & .rbc-time-gutter {
      border: none;
    }
    & .rbc-day-slot .rbc-time-slot {
      border: none;
    }

    & .rbc-time-header-content > .rbc-row.rbc-row-resource {
      border: none;
    }

    & .rbc-today {
      background-color: unset;
    }

    & .rbc-time-header.rbc-overflowing {
      border: none;
    }

    & .rbc-time-header-gutter {
      border: none;
    }

    & .rbc-time-header-content {
      border: none;
    }
    & .rbc-time-gutter .rbc-timeslot-group {
      border: none;
    }
    & .rbc-current-time-indicator {
      background-color: ${COLORS.red} ;
      height: 2px;
    }
    & .rbc-event {
      border: none;
    }
    //& .rbc-timeslot-group:nth-child(-n+5) { // if we doing this we must rewrite event positioning mechanism
    // display: none;
    //}
    & .rbc-time-gutter {
      margin-right: 10px;
    }
    & .rbc-time-column {
      margin-top: 9px;
      & :first-child {
        margin-top: unset;
      }
    }
    & .rbc-time-content div[class*="-EventTime"]  {
      display: block;
    }
  }
`;

export default CustomizedCalendarStyled;
