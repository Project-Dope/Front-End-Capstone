import React from 'react';
import AnswerHelpful from './AnswerHelpful.jsx';
import moment from 'moment';
import axios from 'axios';

class Answer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questionId: this.props.questionId,
      answers: []
    }

    this.addAnswerHelpfulness = this.addAnswerHelpfulness.bind(this);

  }

  addAnswerHelpfulness() {
    axios.put(`api/qa/answers/${this.props.answer.answer_id}/helpful`)
    .then(() => console.log('hi'))
    .catch(err => console.log(err))
  }

  reportAnswer() {
    axios.put(`api/qa/answers/${this.props.answer.answer_id}/report`)
    .then(() => console.log('Answer reported!'))
    .catch(err => console.log(err))
  }


  render () {
    return (
      <span>
        <span className="questions-answer-body">{this.props.answer.body}</span>
        <div className="questions-answer-subtext">by {this.props.answer.answerer_name}, {moment(this.props.answer.date).utc().format('MMMM DD, YYYY')}  |  <AnswerHelpful openModal={this.props.openModal} answerId={this.props.answer.answer_id} addAnswerHelpfulness={this.addAnswerHelpfulness} answerHelpfulness={this.props.answer.helpfulness}/> </div>
    </span>
    )
  }
}


export default Answer;