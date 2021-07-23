import React from 'react';
import Helpful from './Helpful.jsx';

var Answer = (props) => {
  // if (props.answers.answerer_name === "Seller") {
  //   return (
  //     <div>
  //       <div className="questions-answer">A: answer here</div>
  //       <div className="questions-answer-subtext">by username, month day, year  |  <Helpful whichText="answer"/> </div>
  //     </div>
  //   )
  // }
  // else {
    return (
      <div>
        <div className="questions-answer">A: answer here</div>
        <div className="questions-answer-subtext">by username - <b>Seller</b>, month day, year  |  <Helpful whichText="answer"/> </div>
      </div>
    )
  // }
}


export default Answer;