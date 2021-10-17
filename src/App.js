import React from "react";
import { useSelector } from "react-redux";
import { Search } from "./components/Search/Search";
import { Preloader } from "./components/Preloader/Preloader";
import { WordCard } from "./components/WordCard/WordCard";
import { ButtonMyDictionary } from "./components/ButtonMyDictionary/ButtonMyDictionary";
import { MyDictionary } from "./components/MyDictionary/MyDictionary";

import "./App.scss";

function App() {
  if (!localStorage.dictionary) {
    localStorage.setItem("dictionary", "[]");
  }
  const dictionary = JSON.parse(localStorage.dictionary);
  const state = useSelector((state) => state.data);
  const workMode = useSelector((state) => state.workMode);
  return (
    <div className="App">
      <div className="header">
        <ButtonMyDictionary />
        <Search />
      </div>
      {state.status === 1 && <Preloader />}
      {(state.status === 2 && workMode.mode === 0) && <WordCard />}
      {workMode.mode === 1 && <MyDictionary dictionary={dictionary} />}
    </div>
  );
}

export default App;
