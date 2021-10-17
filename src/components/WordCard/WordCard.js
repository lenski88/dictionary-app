import React from "react";
import { useSelector } from "react-redux";
import "./WordCard.scss";

export const WordCard = () => {
  const state = useSelector((state) => state.data);
  const handlerAddWord = () => {
    let dictionary = JSON.parse(localStorage.dictionary);
    let isWord = dictionary.some((i) => {
      return i.word === state.data[0].word;
    });
    if (isWord) {
      return;
    } else {
      let lastId;
      if (!dictionary.length) {
        lastId = 0;
      } else {
        lastId = dictionary[dictionary.length - 1].id + 1;
      }
      let newWord = {
        id: lastId,
        word: state.data[0].word,
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
      <div key={i} className="word-card">
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
          <button onClick={handlerAddWord}>Add</button>
        </div>
      </div>
    );
  });
  return <div className="word-card-container">{card}</div>;
};
