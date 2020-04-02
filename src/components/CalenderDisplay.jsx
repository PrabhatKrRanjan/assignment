import React from "react";
import moment from "moment";
import {
  Calendar,
  momentLocalizer,
  Views
} from "react-big-calendar";
import "../../node_modules/react-big-calendar/lib/sass/styles.scss";

let allViews = Object.keys(Views).map(k => Views[k]);

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: "grey"
    }
  });

const CalenderDisplay = props => {
  const localizer = momentLocalizer(moment);
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={props.events}
        views={allViews}
        step = {60}
        showMultiDayTimes
        defaultDate={new Date()}
        components={{
          timeSlotWrapper: ColoredDateCellWrapper
        }}
        style={{ height: 500 }}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};

export default CalenderDisplay;
