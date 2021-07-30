import React from 'react';

var AnswerHelpful = (props) => {
  const answerModal = function(id) {
    event.preventDefault();
    props.setModalType('add answer')
    props.openModal(props.answerId);
  }

  const hello = function() {
    console.log('hi!')
  }

  // return (
  //   <span>
  //     <span>Helpful?&nbsp;
  //       <a href="" onClick={() => props.addAnswerHelpfulness()}>Yes</a>
  //       <span> {props.answerHelpfulness}  |  <button className='questions-helpful-buttons' onClick={hello}>Report</button></span>
  //     </span>
  //   </span>
  // )

  return (
    <span>
      <span>Helpful?&nbsp;
        <button className='questions-helpful-buttons' onClick={() => props.addAnswerHelpfulness()}>Yes</button>
        <span> {props.answerHelpfulness}  |  <button className='questions-helpful-buttons' onClick={hello}>Report</button></span>
      </span>
    </span>
  )

}

export default AnswerHelpful;