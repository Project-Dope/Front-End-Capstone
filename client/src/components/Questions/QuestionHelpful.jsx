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
        <button className='questions-helpful-buttons' onClick={() => props.addQuestionHelpfulness()}>Yes</button>
        <span> {props.questionHelpfulness}  |  <button className='questions-helpful-buttons' onClick={answerModal}>
          Add Answer</button></span>
      </span>
    </span>
  )

}

export default QuestionHelpful;