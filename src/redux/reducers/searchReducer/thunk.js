import { loadData, setData, errData, resetStatus } from "./searchAC";
import axios from "axios";

export const searchThunkAC = (dispatch, value) => () => {
  dispatch(loadData(value));
  axios
    .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`)
    .then((response) => {
      dispatch(setData(response.data));
    })
    .catch(() => {
      dispatch(errData());
      setTimeout(()=>dispatch(resetStatus()),1000)
    });
};
