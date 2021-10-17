import React from "react";
import { useSelector } from "react-redux";
import "./WordCard.scss";

export const WordCard = () => {
  const state = useSelector((state) => state.data);
  const handlerAddWord = () => {
    
  }
  const card = state.data.map((i) => {
    return (
      <div key={i} className="word-card">
        <div className="word-card-item">Word: {i.word}</div>
       {i.phonetic? <div className="word-card-item">Phonetic: {i.phonetic}</div>:<span></span>}
        {(i.meanings[0].definitions[0].definition !== undefined) ? (
          <div className="word-card-item">
            Meaning: {i.meanings[0].definitions[0].definition}
          </div>
        ) : (
          <span></span>
        )}
        {(i.phonetics.length ) ? (
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
