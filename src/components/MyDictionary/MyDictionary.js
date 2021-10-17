import React from "react";
import { useState } from "react";

import "./MyDictionary.scss";

export const MyDictionary = (props) => {
  const [dictionary, setDictionary] = useState(props);
  return (
    <div className="my-dictionary-container">
      <div className="my-dictionary-block">
        {!dictionary.lenght ? "Dictionary is empty" : "hello"}
      </div>
    </div>
  );
};
