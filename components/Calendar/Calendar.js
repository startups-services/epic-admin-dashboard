import React from 'react';
import PropTypes from 'prop-types';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CustomizedEvent from './CustomizedEvent';
import CustomizedCalendarStyled from './CustomizedCalendarStyled';
import UserAvatar from '../Avatars/UserAvatar';

const localizer = momentLocalizer(moment);

const CustomizedCalendar = ({ users, events }) => (
  <CustomizedCalendarStyled>
    <Calendar
      culture="en-GB"
      views={{
        month: true,
        day: true,
      }}
      step={15}
      defaultView="day"
      timeslots={4}
      localizer={localizer}
      events={events}
      titleAccessor={
        ({ start, end, resource: { background, color, text } }) => CustomizedEvent({
          start, end, background, color, text,
        })
      }
      startAccessor="start"
      endAccessor="end"

      resources={users.map(({ name, src, id }) => ({
        resourceId: id,
        resourceTitle: <UserAvatar src={src} name={name} />,
      }))}
      resourceIdAccessor="resourceId"
      resourceTitleAccessor="resourceTitle"
    />
  </CustomizedCalendarStyled>
);

CustomizedCalendar.propTypes = {
  users: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired,
};

export default CustomizedCalendar;
