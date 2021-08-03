import React from 'react';
import Answer from './Answer.jsx';
import QuestionHelpful from './QuestionHelpful.jsx';
import axios from 'axios';

class QuestionAnswer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questionId: this.props.question.question_id,
      answers: [],
      answersToDisplay: 2
    }

    this.addQuestionHelpfulness = this.addQuestionHelpfulness.bind(this);
    this.showMoreAnswers = this.showMoreAnswers.bind(this);
    this.getProductAnswers = this.getProductAnswers.bind(this);

  }

  componentDidMount() {
    this.getProductAnswers()
    console.log('question ids: ', this.props.question.question_id)
  }

  getProductAnswers() {
    axios.get(`/api/qa/questions/${this.state.questionId}/answers`)
    .then(answers => {
      this.setState({
      answers: answers.data.results
      })
    })
    // .then(() => console.log('list of answers for ', this.state.questionId, this.state.answers))
    .catch(err => console.log(err))
  }

  showMoreAnswers() {
    var twoMoreAnswers = this.state.answersToDisplay + 2;
    this.setState({
      answersToDisplay: twoMoreAnswers
    })
  }

  addQuestionHelpfulness() {
      axios.put(`api/qa/questions/${this.props.question.question_id}/helpful`)
      .then(() => this.props.getProductQuestions())
      .catch(err => console.log(err))
  }

  render () {

    // if (!this.state.answers.length) {
    //   return null;
    // }

    return (
      <div>
        <div className="questions-question"><b>Q: {this.props.question.question_body}</b>
          <QuestionHelpful
          questionId={this.props.question.question_id}
          addQuestionHelpfulness={this.addQuestionHelpfulness}
          questionHelpfulness={this.props.question.question_helpfulness}
          show={this.props.show}
          openModal={this.props.openModal}
          closeModal={this.props.closeModal}
          setModalType={this.props.setModalType}
          />
        </div>
        <div className="questions-answer"> <b>A:</b>
          {this.state.answers.slice(0, this.state.answersToDisplay).map((item, index) =>
          <Answer
          answer={item}
          setModalType={this.props.setModalType}
          getProductAnswers={this.getProductAnswers}
          key={index}/>
          )}
        </div>
        <div>
          {this.state.answersToDisplay < this.state.answers.length ? (<span className="questions-more-answers" onClick={this.showMoreAnswers} >LOAD MORE ANSWERS</span>) : null}
        </div>
      </div>
    )
  }

}

export default QuestionAnswer;