import React from 'react';
import Answer from './Answer.jsx';
import Helpful from './Helpful.jsx';

var QuestionAnswer = (props) => {
  return (
    <div>
      <div className="questions-question">Q: question here?
        <Helpful
        whichType='question'
        show={props.show}
        openModal={props.openModal}
        closeModal={props.closeModal}
        setModalType={props.setModalType}
        />
      </div>
      <div className="questions-answer">
        <Answer />
      </div>
    </div>
  )
}


export default QuestionAnswer;