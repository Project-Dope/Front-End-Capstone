import React from 'react';
import './Questions.css';
import QuestionAnswer from './QuestionAnswer.jsx';
import Answer from './Answer.jsx';
import Modal from './Modal.jsx';

export default class Questions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
      show: false,
      modalType: null
    }

    this.onChange = this.onChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setModalType = this.setModalType.bind(this);

  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  openModal(event) {
    this.setState({
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
    console.log(event.target.name.value);
    console.log(event.target.email.value);
    console.log('hi');
  }

  render() {
    return (
      <div>
        <form>
          <label></label>
          <input className="questions-search-bar" value={this.state.searchValue} onChange={this.onChange} name="searchValue" type="text" placeholder="Have a question? Search for answers..."></input>
        </form>
        <div className="questions-component">
          <QuestionAnswer
          show={this.state.show}
          openModal={this.openModal}
          closeModal={this.closeModal}
          setModalType={this.setModalType}
          />
        </div>
        <div>
          <button>MORE ANSWERED QUESTIONS  </button>
          <button onClick={() => {
            this.openModal()
            this.setModalType('add question')
          }
          }>ADD A QUESTION</button>
          <Modal
            whichType={this.state.modalType}
            show={this.state.show}
            closeModal={this.closeModal}
            // handleSubmit={this.handleSubmit}
           />
        </div>
      </div>
    );
  }
}