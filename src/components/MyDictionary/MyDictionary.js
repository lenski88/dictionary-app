import React from "react";
import { useState } from "react";

import "./MyDictionary.scss";

export const MyDictionary = (props) => {
  const [state, setState] = useState(props.dictionary);
  
   const sort =  state.sort((a, b) => {
      if (a.word < b.word) return -1;
      if (a.word > b.word) return 1;
      return 0;
    });
  
  const handlerDeleteWord = (e) => {
    let newState = state.filter((i) => {
      return i.id !== Number(e.target.name);
    });
    setState(newState);
    newState = newState.sort((a, b) => {
      if (Number(a.id) < Number(b.id)) return -1;
      if (Number(a.id) > Number(b.id)) return 1;
      return 0;
    });
    localStorage.clear();
    newState =  JSON.stringify(newState)
    localStorage.setItem('dictionary', newState)
  };
  const dictionaryList = state.map((i) => {
    return (
      <div key={i.id} className="my-dictionary-word">
        <button name={i.id} onClick={handlerDeleteWord}>
          X
        </button>
        {`  ${i.word} - ${i.meanings}`}
        <hr />
      </div>
    );
  });

  return (
    <div className="my-dictionary-container">
      <div className="my-dictionary-block">
        {!state.length ? "Your dictionary is empty!" : dictionaryList}
      </div>
    </div>
  );
};
