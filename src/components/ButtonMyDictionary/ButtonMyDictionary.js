import React from "react";
import { openDictionary } from "../../redux/reducers/workModeReducer/workModeAC";
import { useDispatch } from "react-redux";
import "./ButtonMyDictionary.scss";

export const ButtonMyDictionary = () => {
  const dispatch = useDispatch();
  const handlerOpenDictionary = () => {
    dispatch(openDictionary());
  };
  return <button onClick={handlerOpenDictionary}>My dictionary</button>;
};
