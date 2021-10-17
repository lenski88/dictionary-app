export const LOAD_DATA = "LOAD_DATA";
export const SET_DATA = "SET_DATA";
export const ERR_DATA = "ERR_DATA";

export const loadData = (value) => {
  return {
    type: LOAD_DATA,
    payload: value
  };
};

export const setData = (data) => {
  return {
    type: SET_DATA,
    payload: data,
  };
};

export const errData = () => {
  return {
    type: ERR_DATA,
  };
};
