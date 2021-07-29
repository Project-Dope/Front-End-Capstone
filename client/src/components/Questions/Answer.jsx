import React from 'react';
import Helpful from './Helpful.jsx';
import moment from 'moment';

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
        <div className="questions-answer">A: {props.answer.body}</div>
        <div className="questions-answer-subtext">by {props.answer.answerer_name}, {moment(props.answer.date).utc().format('MMMM DD, YYYY')}  |  <Helpful answerHelpfulness={props.answer.helpfulness} whichText="answer"/> </div>
      </div>
    )
  // }
}

// class Answer extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       questionId: this.props.questionId,
//       answers: []
//     }

//   }

//   getProductAnswers() {
//     axios.get(`/api/qa/questions/${this.props.productId}/answers`)
//     .then(answers => {
//       this.setState({
//       answers: questions.data.results
//       })
//     })
//     .then(() => console.log('this.state.questions: ', this.state.questions))
//     .catch(err => console.log(err))
//   }

//   render () {
//     <div>
//       <div className="questions-answer">A: answer here</div>
//       <div className="questions-answer-subtext">by username - <b>Seller</b>, month day, year  |  <Helpful whichText="answer"/> </div>
//     </div>
//   }
// }


export default Answer;