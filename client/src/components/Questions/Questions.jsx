import React from 'react';
import './Questions.css';
import QuestionAnswer from './QuestionAnswer.jsx';
import Answer from './Answer.jsx';
import Modal from './Modal.jsx';
import axios from 'axios';

export default class Questions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
      show: false,
      questions: [],
      modalType: null,
      questionId: null,
      questionsToDisplay: 4
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.setModalType = this.setModalType.bind(this);
    this.getProductQuestions = this.getProductQuestions.bind(this);
    this.showMoreQuestions = this.showMoreQuestions.bind(this);

  }

  componentDidMount() {
    this.getProductQuestions()
    console.log('product id: ', this.props.productId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.getProductQuestions();
    }
  }

  getProductQuestions() {
    axios.get(`api/qa/questions/${this.props.productId}`)
    .then(questions => {
      this.setState({
      questions: questions.data.results
      })
    })
    // .then(() => console.log('all questions for productId: ', this.state.questions))
    .catch(err => console.log(err))
  }

  showMoreQuestions() {
    var twoMoreQuestions = this.state.questionsToDisplay + 2;
    this.setState({
      questionsToDisplay: twoMoreQuestions
    })
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  openModal(input) {
    this.setState({
      questionId: input,
      show: true
    })
  }

  closeModal(event) {
    this.setState({
      show: false
    })
  }

  setModalType(input) {
    this.setState({
      modalType: input
    })
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    if (!this.state.questions.length) {
      return null;
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label></label>
          <input className="questions-search-bar" value={this.state.searchValue} onChange={this.onChange} name="searchValue" type="text" placeholder="Have a question? Search for answers..."></input>
          {/* <button className="questions-search-button"></button> */}
        </form>
        <div className="questions-component">
          {this.state.questions.slice(0, this.state.questionsToDisplay).map((item, index) =>
          <QuestionAnswer
          question={item}
          getProductQuestions={this.getProductQuestions}
          key={index}
          show={this.state.show}
          openModal={this.openModal}
          closeModal={this.closeModal}
          setModalType={this.setModalType}
          />
          )}
        </div>
        <div>
          {/* <button className="questions-more-questions" onClick={this.showMoreQuestions} >MORE ANSWERED QUESTIONS  </button> */}
          {this.state.questionsToDisplay < this.state.questions.length ? (<button className="questions-more-questions" onClick={this.showMoreQuestions} >MORE ANSWERED QUESTIONS  </button>) : null}
          <button className="questions-add-question" onClick={() => {
            this.setModalType('add question')
            this.openModal()
          }
          }>ADD A QUESTION</button>
          <Modal
            productId={this.props.productId}
            questionId={this.state.questionId}
            show={this.state.show}
            type={this.state.modalType}
            closeModal={this.closeModal}
          />
        </div>
      </div>
    )
  }
}