import React from "react";
import { useSelector } from "react-redux";
import "./WordCard.scss";
import { useState, useEffect} from "react";

export const WordCard = () => {
  const state = useSelector((state) => state.data);
  const [addWord, setAddWord] = useState(0);
  useEffect(()=>{
    if(addWord) {
      setTimeout(()=>setAddWord(0),500);
    }
  })
  const handlerAddWord = () => {
    let dictionary = JSON.parse(localStorage.dictionary);
    let isWord = dictionary.some((i) => {
      return i.word === state.data[0].word;
    });
    if (isWord) {
      
      return;
    } else {
      setAddWord(1);
      let lastId;
      if (!dictionary.length) {
        lastId = 0;
      } else {
        lastId = dictionary[dictionary.length - 1].id + 1;
      }
      let newWord = {
        id: lastId,
        word: state.data[0].word.toLowerCase(),
        meanings: state.data[0].meanings[0].definitions[0].definition,
      };
      let finalDictionary = [...dictionary];
      finalDictionary.push(newWord);
      finalDictionary = JSON.stringify(finalDictionary);
      localStorage.setItem("dictionary", finalDictionary);
    }
  };
  const card = state.data.map((i) => {
    return (
      <div key={Math.random()} className="word-card">
        <div className="word-card-item">Word: {i.word}</div>
        {i.phonetic ? (
          <div className="word-card-item">Phonetic: {i.phonetic}</div>
        ) : (
          <span></span>
        )}
        {i.meanings[0].definitions[0].definition !== undefined ? (
          <div className="word-card-item">
            Meaning: {i.meanings[0].definitions[0].definition}
          </div>
        ) : (
          <span></span>
        )}
        {i.phonetics.length ? (
          <div className="word-card-item">
            <audio src={i.phonetics[0].audio} controls />
          </div>
        ) : (
          <span></span>
        )}
        <div className="word-card-item">
        {addWord? `+${state.data[0].word}`:<button onClick={handlerAddWord}>Add</button>}
        </div>
      </div>
    );
  });
  return <div className="word-card-container">{card}</div>;
};
