import React from "react";
import star from "../assets/images/icon-star.svg";
import Container from "./container";
import plus from "../assets/images/icon-plus.svg";
import minus from "../assets/images/icon-minus.svg";
const FaqsComponent = () => {
  return (
    <div className="allTogether">
      <div className="faqs">
        <div className="faqsHeader">
          <img src={star} alt="purple-star" />
          <h1 className="faqsHeaderOne">FAQs</h1>
        </div>
        <div>
          <Container
            container="allQuestions"
            type={minus}
            questionHeaderTwo="What is Frontend mentor, and how will it help me?"
            questionParagraph="Frontend Mentor offers realistic coding challenges to help developers improve their frontend skills with projects in HTML, CSS and JavaScript. It's suitable for all levels and ideal for portfolio building."
          />
          <Container
            container="allQuestions"
            type={plus}
            questionHeaderTwo="Is Frontend Mentor  free?"
          />

          <Container
            container="allQuestions"
            type={plus}
            questionHeaderTwo="Can  i use Frontend Mentor projects in my portfolio?"
          />

          <Container
            type={plus}
            questionHeaderTwo="How can i get help if I'm stuck on a challenge?"
          />
        </div>
      </div>
    </div>
  );
};

export default FaqsComponent;
