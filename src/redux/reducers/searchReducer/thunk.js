import { loadData, setData, errData } from "./searchAC";
import axios from "axios";

export const searchThunkAC = (dispatch, value) => () => {
    dispatch (loadData(value));
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`)
    .then ( (response) => {
        dispatch(setData(response.data))
    })
    .catch ((err) => {
        dispatch(errData());
        console.log(err)
    })
}