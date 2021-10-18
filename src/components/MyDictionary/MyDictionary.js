import React from "react";
import { useState } from "react";

import "./MyDictionary.scss";

export const MyDictionary = (props) => {
  const [state, setState] = useState(props);
  const dictionaryList = state.dictionary.map((i) => {
    return (
      <div key={i.id} className="my-dictionary-word">
        <button>X</button>
        {`  ${i.word} - ${i.meanings}`} 
      </div>
    );
  });
  console.log(dictionaryList);
  return (
    <div className="my-dictionary-container">
      <div className="my-dictionary-block">
        {!state.dictionary.length ? "Dictionary is empty" : dictionaryList}
      </div>
    </div>
  );
};
