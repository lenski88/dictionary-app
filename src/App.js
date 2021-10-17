import React from "react";
import { useSelector } from "react-redux";
import { Search } from "./components/Search/Search";
import { Preloader } from "./components/Preloader/Preloader";
import { WordCard } from "./components/WordCard/WordCard";
import { ButtonMyDictionary } from "./components/ButtonMyDictionary/ButtonMyDictionary";

import "./App.scss";

function App() {
  const state = useSelector((state) => state.data);
  return (
    <div className="App">
      <div className='header'>
        <ButtonMyDictionary />
        <Search />
      </div>
      {state.status === 1 && <Preloader />}
      {state.status === 2 && <WordCard />}
    </div>
  );
}

export default App;
