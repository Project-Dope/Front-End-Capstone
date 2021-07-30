import React from 'react';
import Answer from './Answer.jsx';
import QuestionHelpful from './QuestionHelpful.jsx';
import axios from 'axios';

class QuestionAnswer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questionId: this.props.question.question_id,
      answers: []
    }

    this.addQuestionHelpfulness = this.addQuestionHelpfulness.bind(this);

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

  addQuestionHelpfulness() {
      axios.put(`api/qa/questions/${this.props.question.question_id}/helpful`)
      .then(() => getProductQuestion())
      .catch(err => console.log(err))
  }

  render () {
    return (
      <div>
        <div className="questions-question">Q: {this.props.question.question_body}
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
        <div className="questions-answer">
          {this.state.answers.map((item, index) =>
          <Answer
          answer={item}
          setModalType={this.props.setModalType}
          key={index}/>
          )}
        </div>
      </div>
    )
  }

  // render () {
  //   return (
  //     <div>
  //       <div className="questions-question">Q: {this.props.question.question_body}
  //         <QuestionHelpful
  //         addQuestionHelpfulness={this.addQuestionHelpfulness}
  //         questionHelpfulness={this.props.question.question_helpfulness}
  //         show={this.props.show}
  //         openModal={this.props.openModal}
  //         closeModal={this.props.closeModal}
  //         setModalType={this.props.setModalType}
  //         />
  //       </div>
  //       <div className="questions-answer">
  //         {this.state.answers.map((item, index) =>
  //         <Answer
  //         answer={item}
  //         setModalType={this.props.setModalType}
  //         key={index}/>
  //         )}
  //       </div>
  //     </div>
  //   )
  // }

}

export default QuestionAnswer;