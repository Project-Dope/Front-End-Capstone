import React from 'react';
import AnswerHelpful from './AnswerHelpful.jsx';
import moment from 'moment';
import axios from 'axios';
import Photos from './Photos.jsx';

class Answer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questionId: this.props.questionId,
      answers: [],
      photos: this.props.answer.photos
    }

    this.addAnswerHelpfulness = this.addAnswerHelpfulness.bind(this);
    this.reportAnswer = this.reportAnswer.bind(this);

  }

  addAnswerHelpfulness() {
    axios.put(`api/qa/answers/${this.props.answer.answer_id}/helpful`)
    .then(() => console.log(this.state.photos))
    .then(() => this.props.getProductAnswers())
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
        {this.state.photos.length ? (<div> {this.state.photos.map((item, index) => <Photos photo={item} key={index}/>)} </div>) : null}
        <div className="questions-answer-subtext">by {this.props.answer.answerer_name}, {moment(this.props.answer.date).utc().format('MMMM DD, YYYY')}  |  <AnswerHelpful reportAnswer={this.reportAnswer} openModal={this.props.openModal} answerId={this.props.answer.answer_id} addAnswerHelpfulness={this.addAnswerHelpfulness} answerHelpfulness={this.props.answer.helpfulness}/> </div>
    </span>
    )
  }
}


export default Answer;