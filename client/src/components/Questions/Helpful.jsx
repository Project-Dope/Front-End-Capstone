import React from 'react';

var Helpful = (props) => {
  const click = function(event) {
    event.preventDefault();
    props.setModalType('add answer')
    props.openModal();
  }
  if (props.whichType === 'question') {
    return (
      <span>
        <span>Helpful?&nbsp;
          <a href="www.replacewithclickhandlernotarealwebsite.com">Yes</a>
          <span> (25)  |  <a href='' onClick={click}>
            Add Answer</a></span>
        </span>
      </span>
    )
  }
  else {
    return (
      <span>
        <span>Helpful?&nbsp;
          <a href="www.replacewithclickhandlernotarealwebsite.com">Yes</a>
          <span> {props.answerHelpfulness}  |  <a href="www.replacewithReport.com">Report</a></span>
        </span>
      </span>
    )
  }
}

export default Helpful;