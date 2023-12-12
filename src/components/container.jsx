import React from "react";
import Questions from "./Questions";

const Container = ({container, questionHeaderTwo, type, questionParagraph}) => {
  return (
    <div className={container}>
      <Questions
        questionHeaders={questionHeaderTwo}
        src={type}
        question={questionParagraph}
      />
    </div>
  );
};

export default Container;
