import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// redux
import { useSelector } from "react-redux";

const localizer = momentLocalizer(moment);

const BigCalender = () => {
  const { holidays, error } = useSelector((state) => state.holidaysReducer);

  if (error && error.message) {
    return (
      <div className="error">
        <span>{error.message}</span>
      </div>
    );
  }

  return (
    <Calendar
      localizer={localizer}
      events={holidays && holidays}
      defaultView="month"
      startAccessor="start"
      endAccessor="end"
      style={{ height: "100vh" }}
    />
  );
};
export default BigCalender;
