import React from "react";
const Questions = ({ questionHeaders, src, question }) => {
  return (
    <div className="questionStyle">
      <div>
        <h2>{questionHeaders}</h2>
        <img src={src} alt="add and minus image" />
      </div>
      <p className="questionP">{question}</p>
    </div>
  );
};

export default Questions;
