import React from 'react';

var AnswerHelpful = (props) => {
  const answerModal = function(id) {
    event.preventDefault();
    props.setModalType('add answer')
    props.openModal(props.answerId);
  }

  return (
    <span>
      <span>Helpful?&nbsp;
        <a href="" onClick={() => props.addAnswerHelpfulness()}>Yes</a>
        <span> {props.answerHelpfulness}  |  <a href="">Report</a></span>
      </span>
    </span>
  )

}

export default AnswerHelpful;