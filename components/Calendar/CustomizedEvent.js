import styled from '@emotion/styled';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import COLORS from '../constants';

const CustomizedEventStyled = styled.div`
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
  padding: 2px 5px;
  border-radius: 5px;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.25px;
`;

const EventLabel = styled.div`
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.25px;
  //color: ${({ color }) => color}
`;

const EventTime = styled.div`
  margin-top: 15px;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.4px;
  color: ${COLORS.black};
  mix-blend-mode: normal;
  opacity: 0.5;
  display: none;
`;

const CustomizedEvent = ({
  start, end, background, color, text,
}) => (
  <CustomizedEventStyled background={background} color={color}>
    <EventLabel>{text}</EventLabel>
    <EventTime>{`${moment(start).format('HH:mm')} - ${moment(end).format('HH:mm')}`}</EventTime>
  </CustomizedEventStyled>
);

CustomizedEvent.propTypes = {
  background: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
};

export default CustomizedEvent;
