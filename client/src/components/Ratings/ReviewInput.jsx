import React from 'react';

class ReviewInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      summaryInput: '',
      bodyInput: '',
      displayInput: '',
      emailInput: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleInputSubmit(event) {
    event.preventDefault();

    var newDate = new Date().toLocaleDateString();

    var newReview = {
      starRating: null,
      dateOfReview: newDate,
      reviewSummary: this.state.summaryInput,
      reviewBody: this.state.bodyInput,
      recommend: null,
      username: this.state.displayInput,
      helpfulnessYes: 0,
      helpfulnessNo: 0
    }

    console.log('newReview: ', newReview);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleInputSubmit}>
          <p>Choose star rating here</p>
          <p>Poor</p>
          <p>Fair</p>
          <p>Average</p>
          <p>Good</p>
          <p>Great</p>
          <h5>Do you recommend this product?</h5>
          <button>Yes</button>
          <button>No</button>
          <h5>Review Summary</h5>
          <input name="summaryInput" value={this.state.summaryInput} onChange={this.handleInputChange} />
          <h5>Review Body</h5>
          <input name="bodyInput" value={this.state.bodyInput} onChange={this.handleInputChange} />
          <p></p>
          <button>Upload Photos</button>
          <h5>Display Name</h5>
          <input name="displayInput" value={this.state.displayInput} onChange={this.handleInputChange} />
          <h5>Your email</h5>
          <input name="emailInput" value={this.state.emailInput} onChange={this.handleInputChange} />
          <p></p>
          <button>Submit Review</button>
        </form>
      </div>
    )
  }

}

export default ReviewInput;