import React from 'react';

var QuestionHelpful = (props) => {
  const answerModal = function(event) {
    event.preventDefault();
    props.setModalType('add answer')
    props.openModal(props.questionId);
  }

  return (
    <span>
      <span>Helpful?&nbsp;
        <a href="" onClick={() => props.addQuestionHelpfulness()}>Yes</a>
        <span> {props.questionHelpfulness}  |  <a href='' onClick={answerModal}>
          Add Answer</a></span>
      </span>
    </span>
  )

}

export default QuestionHelpful;