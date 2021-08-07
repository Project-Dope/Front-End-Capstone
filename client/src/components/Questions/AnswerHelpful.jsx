import React from 'react';

class AnswerHelpful extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reported: false,
      clickedHelpful: false
    }

    this.report = this.report.bind(this);
    this.incrementHelpful = this.incrementHelpful.bind(this);
  }

  report() {
    this.setState({
      reported: true
    })
    this.props.reportAnswer();
  }

  incrementHelpful() {
    this.setState({
      clickedHelpful: true
    })
    this.props.addAnswerHelpfulness();
  }

  render() {
    return (
      <span>
        <span>Helpful?&nbsp;
          {this.state.clickedHelpful ? (<button className='questions-helpful-buttons' >Yes</button>) :
          (<button className='questions-helpful-buttons' onClick={this.incrementHelpful}>Yes</button>)}
          <span> {this.props.answerHelpfulness}  |  {this.state.reported ? (<span>Reported</span>) : (<button className='questions-helpful-buttons' onClick={this.report}>Report</button>)}</span>
        </span>
      </span>
    )

  }

}

// var AnswerHelpful = (props) => {
//   const answerModal = function(id) {
//     event.preventDefault();
//     props.setModalType('add answer')
//     props.openModal(props.answerId);
//   }

//   const hello = function() {
//     console.log('hi!')
//   }

//   // return (
//   //   <span>
//   //     <span>Helpful?&nbsp;
//   //       <a href="" onClick={() => props.addAnswerHelpfulness()}>Yes</a>
//   //       <span> {props.answerHelpfulness}  |  <button className='questions-helpful-buttons' onClick={hello}>Report</button></span>
//   //     </span>
//   //   </span>
//   // )

  // return (
  //   <span>
  //     <span>Helpful?&nbsp;
  //       <button className='questions-helpful-buttons' onClick={() => props.addAnswerHelpfulness()}>Yes</button>
  //       <span> {props.answerHelpfulness}  |  <button className='questions-helpful-buttons' onClick={hello}>Report</button></span>
  //     </span>
  //   </span>
  // )

// }

export default AnswerHelpful;