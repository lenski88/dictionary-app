import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchThunkAC } from "../../redux/reducers/searchReducer/thunk";
import { closeDictionary } from "../../redux/reducers/workModeReducer/workModeAC";
import "./Search.scss";

export const Search = () => {
  const [value, setValue] = useState("");
  const [input, setBottom] = useState("input-text");
  const state = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handlerChange = (e) => {
    setValue(e.target.value.trim());
  };
  const handlerSearch = (word) => {
    word = value;
    if (!word) {
      setBottom("input-empty");
      setTimeout(() => setBottom("input-text"), 400);
    } else {
      dispatch(closeDictionary())
      dispatch(searchThunkAC(dispatch, word)); 
    }
  };
  useEffect(()=> {
    if (state.status === 3) {
      setValue("NOT FOUND");
      setTimeout(() => setValue(""), 1000);
    }
  }, [state.status])

  return (
    <div className="search-container">
      <div className="input-block">
        <input
          type="text"
          className={input}
          value={value}
          onChange={handlerChange}
          placeholder="Type here to search"
        />
      </div>
      <div className="button-block">
        <button
          className={!value ? "btn-disabled" : "btn"}
          onClick={handlerSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};
