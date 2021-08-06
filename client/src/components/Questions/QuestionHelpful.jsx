import React from "react";

class QuestionHelpful extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clickedHelpful: false
    }

    this.answerModal = this.answerModal.bind(this);
    this.incrementHelpful = this.incrementHelpful.bind(this);
  }

  answerModal(event) {
    event.preventDefault();
    this.props.setModalType('add answer')
    this.props.openModal(this.props.questionId);
  }

  incrementHelpful() {
    this.setState({
      clickedHelpful: true
    })
    this.props.addQuestionHelpfulness();
  }

  render() {
    return (
      <span>
        <span>Helpful?&nbsp;
          {this.state.clickedHelpful ? (<button className='questions-helpful-buttons' >Yes</button>) :
          (<button className='questions-helpful-buttons' onClick={this.incrementHelpful}>Yes</button>)}
          <span> {this.props.questionHelpfulness}  |  <button className='questions-helpful-buttons' onClick={this.answerModal}>
            Add Answer</button></span>
        </span>
      </span>
    )
  }

// var QuestionHelpful = (props) => {
//   const answerModal = function(event) {
//     event.preventDefault();
//     props.setModalType('add answer')
//     props.openModal(props.questionId);
//   }

//   return (
//     <span>
//       <span>Helpful?&nbsp;
//         <button className='questions-helpful-buttons' onClick={() => props.addQuestionHelpfulness()}>Yes</button>
//         <span> {props.questionHelpfulness}  |  <button className='questions-helpful-buttons' onClick={answerModal}>
//           Add Answer</button></span>
//       </span>
//     </span>
//   )

export default QuestionHelpful;
