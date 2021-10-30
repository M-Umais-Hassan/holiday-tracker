import {
  HOLIDAYS_REQUEST,
  HOLIDAYS_SUCCESS,
  HOLIDAYS_FAILURE,
} from "../Constants/ActionTypes";
import axios from "axios";

const apiKey = "31f3fc99343c3a84802ec02f40342c154220d093";
const apiEndPoint = "https://calendarific.com/api/v2/holidays";

const holidaysRequest = () => {
  return {
    type: HOLIDAYS_REQUEST,
  };
};

const holidaysSuccess = (holidays) => {
  return {
    type: HOLIDAYS_SUCCESS,
    payload: holidays,
  };
};

const holidaysFailure = (error) => {
  return {
    type: HOLIDAYS_FAILURE,
    payload: error,
  };
};

export const getHolidays = (body) => async (dispatch) => {
  const { country, year } = body;
  const eventsList = [];
  dispatch(holidaysRequest());
  await axios
    .get(`${apiEndPoint}?&api_key=${apiKey}&country=${country}&year=${year}`)
    .then((res) => {
      res.data.response &&
        res.data.response.holidays &&
        res.data.response.holidays.forEach((data) => {
          eventsList.push({
            allDay: true,
            start: data.date.iso,
            end: data.date.iso,
            title: data.name,
          });
        });
      dispatch(holidaysSuccess(eventsList));
    })
    .catch((err) => {
      dispatch(holidaysFailure(err));
    });
};
