import {
  HOLIDAYS_REQUEST,
  HOLIDAYS_SUCCESS,
  HOLIDAYS_FAILURE,
} from "../Constants/ActionTypes";

const initialState = {
  holidays: [],
  loading: false,
  error: {},
};

export const holidaysReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOLIDAYS_REQUEST:
      return {
        ...state,
        holidays: [],
        loading: true,
        error: {},
      };

    case HOLIDAYS_SUCCESS:
      return {
        ...state,
        holidays: action.payload,
        loading: false,
        error: {},
      };

    case HOLIDAYS_FAILURE:
      return {
        ...state,
        holidays: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
