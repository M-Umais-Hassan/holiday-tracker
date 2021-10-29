import {
  HOLIDAYS_REQUEST,
  HOLIDAYS_SUCCESS,
  HOLIDAYS_FAILURE,
} from "../Constants/ActionTypes";

export const holidaysRequest = () => {
  return {
    type: HOLIDAYS_REQUEST,
  };
};

export const holidaysSuccess = (holidays) => {
  return {
    type: HOLIDAYS_SUCCESS,
    payload: holidays,
  };
};

export const holidaysFailure = (error) => {
  return {
    type: HOLIDAYS_FAILURE,
    payload: error,
  };
};
