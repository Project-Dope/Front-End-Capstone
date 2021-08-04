import React from 'react';
import Answer from './Answer.jsx';
import QuestionHelpful from './QuestionHelpful.jsx';
import axios from 'axios';

class QuestionAnswer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answers: [],
      answersToDisplay: 2,
      answersLoaded: false
    }

    this.addQuestionHelpfulness = this.addQuestionHelpfulness.bind(this);
    this.showMoreAnswers = this.showMoreAnswers.bind(this);
    this.getProductAnswers = this.getProductAnswers.bind(this);
    this.collapseAnswers = this.collapseAnswers.bind(this);

  }

  componentDidMount() {
    this.getProductAnswers()
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.getProductAnswers();
    }
  }

  getProductAnswers() {
    axios.get(`/api/qa/questions/${this.props.question.question_id}/answers`)
    .then(answers => {
      this.setState({
      answers: answers.data.results
      })
    })
    // .then(() => console.log('list of answers for ', this.state.questionId, this.state.answers))
    .catch(err => console.log(err))
  }

  // showMoreAnswers() {
  //   var twoMoreAnswers = this.state.answersToDisplay + 2;
  //   this.setState({
  //     answersToDisplay: twoMoreAnswers
  //   })
  // }

  showMoreAnswers() {
    this.setState({
      answersToDisplay: this.state.answers.length,
      answersLoaded: true
    })
  }

  collapseAnswers() {
    this.setState({
      answersToDisplay: 2
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
        {/* {console.log("this.props.question: ", this.props.question)} */}
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
          // getProductAnswers={this.getProductAnswers}
          key={index}/>
          )}
        </div>
        <div>
          {this.state.answersToDisplay < this.state.answers.length ? (<span className="questions-more-answers" onClick={this.showMoreAnswers} >LOAD MORE ANSWERS</span>) : null}
          {this.state.answersToDisplay >= this.state.answers.length && this.state.answersLoaded === true ? (<span className="questions-more-answers" onClick={this.collapseAnswers} >COLLAPSE ANSWERS</span>) : null}
        </div>
      </div>
    )
  }

}

export default QuestionAnswer;