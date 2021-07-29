import React from 'react';
import Answer from './Answer.jsx';
import Helpful from './Helpful.jsx';
import axios from 'axios';

class QuestionAnswer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questionId: this.props.question.question_id,
      answers: []
    }

  }

  componentDidMount() {
    this.getProductAnswers()
  }

  getProductAnswers() {
    axios.get(`/api/qa/questions/${this.state.questionId}/answers`)
    .then(answers => {
      this.setState({
      answers: answers.data.results
      })
    })
    .then(() => console.log('list of answers for ', this.state.questionId, this.state.answers))
    .catch(err => console.log(err))
  }

  render () {
    return (
      <div>
        <div className="questions-question">Q: {this.props.question.question_body}
          <Helpful
          whichType='question'
          show={this.props.show}
          openModal={this.props.openModal}
          closeModal={this.props.closeModal}
          setModalType={this.props.setModalType}
          />
        </div>
        <div className="questions-answer">
          {this.state.answers.map((item, index) =>
          <Answer answer={item} key={index}/>
          )}
        </div>
      </div>
    )
  }

}

  // var QuestionAnswer = (props) => (
  //   <div>
  //     <div className="questions-question">Q: {props.question.question_body}
  //       <Helpful
  //       whichType='question'
  //       show={props.show}
  //       openModal={props.openModal}
  //       closeModal={props.closeModal}
  //       setModalType={props.setModalType}
  //       />
  //     </div>
  //     <div className="questions-answer">
  //       <Answer
  //       questionId={props.question.question_id}/>
  //     </div>
  //   </div>
  // )


export default QuestionAnswer;