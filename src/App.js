import React from 'react';
import { Search } from './components/Search/Search';
import { Preloader } from './components/Preloader/Preloader';
import { useSelector } from 'react-redux';

import './App.css';


function App() {
  const state = useSelector(state => state.data)
  return (
    <div className="App">
      <Search/>
     {state.status === 1 && <Preloader/>}
    </div>
  );
}

export default App;
