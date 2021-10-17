import { OPEN_DICTIONARY, CLOSE_DICTIONARY } from "./workModeAC";


const initialState = {
  mode: 0, //1 - dictionary is open, 0 - dictionary is closed
};

export const workModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_DICTIONARY: {
      let newState = {
        mode: 1,
      };
      return newState;
    }
    case CLOSE_DICTIONARY: {
        let newState = {
          mode: 0,
        };
        return newState;
      }
    default:
      return state;
  }
};
