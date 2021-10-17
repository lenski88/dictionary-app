import { LOAD_DATA, SET_DATA, ERR_DATA, RESET_STATUS } from "./searchAC";

const initialState = {
  data: null,
  status: 0, //1 - load, 2 - set, 3 - err
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA: {
      let newState = {
        value: action.payload,
        data: null,
        status: 1,
      };
      return newState;
    }
    case SET_DATA: {
      let newState = {
        data: action.payload,
        status: 2,
      };
      return newState;
    }
    case ERR_DATA: {
      let newState = {
        data: null,
        status: 3,
      };
      return newState;
    }
    case RESET_STATUS: {
      let newState = {
        data: null,
        status: 0,
      };
      return newState;
    }

    default:
      return state;
  }
};
