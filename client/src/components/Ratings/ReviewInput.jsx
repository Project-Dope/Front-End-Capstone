import React from "react";

class ReviewInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      summaryInput: "",
      summaryLength: null,
      bodyInput: "",
      bodyLength: null,
      displayInput: "",
      emailInput: "",
      recommended: null,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.recommendClick = this.recommendClick.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });

    if (event.target.name === "summaryInput") {
      this.setState({
        summaryLength: this.state.summaryInput.length,
      });
      // console.log(this.state.summaryLength);
    } else if (event.target.name === "bodyInput") {
      this.setState({
        bodyLength: this.state.bodyInput.length,
      });
      // console.log(this.state.bodyLength);
    }
  }

  handleInputSubmit(event) {
    event.preventDefault();

    var summaryLength = this.state.summaryLength;
    var bodyLength = this.state.bodyLength;

    // don't submit if
    // input fields are blank
    // recommended is null
    // summary is over 50 characters
    // body is under 50 characters
    // body is over 1000 characters

    if (summaryLength > 50) {
      alert("Summary must be at under 50 characters");
      return;
    }
    if (bodyLength < 50) {
      alert("Body must be at least 50 characters");
      return;
    }
    if (bodyLength > 1000) {
      alert("Body must be under 1000 characters");
      return;
    }
    if (this.state.recommended === null) {
      alert("Must make recommended selection");
      return;
    }

    var newDate = new Date().toLocaleDateString();

    var newReview = {
      starRating: null,
      dateOfReview: newDate,
      reviewSummary: this.state.summaryInput,
      reviewBody: this.state.bodyInput,
      recommend: this.state.recommended,
      username: this.state.displayInput,
      helpfulnessYes: 0,
      helpfulnessNo: 0,
    };
    console.log("newReview: ", newReview);
  }

  recommendClick(event) {
    if (event.target.value === "Yes") {
      this.setState({
        recommended: true,
      });
    } else {
      this.setState({
        recommended: false,
      });
    }

    console.log("recommended: ", this.state.recommended);
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
          <button onClick={this.recommendClick} value="Yes">
            Yes
          </button>
          <button onClick={this.recommendClick} value="No">
            No
          </button>
          <h5>Review Summary</h5>
          <input
            name="summaryInput"
            value={this.state.summaryInput}
            onChange={this.handleInputChange}
          />
          <h5>Review Body</h5>
          <input
            name="bodyInput"
            value={this.state.bodyInput}
            onChange={this.handleInputChange}
          />
          <p></p>
          <button>Upload Photos</button>
          <h5>Display Name</h5>
          <input
            name="displayInput"
            value={this.state.displayInput}
            onChange={this.handleInputChange}
          />
          <h5>Your email</h5>
          <input
            name="emailInput"
            value={this.state.emailInput}
            onChange={this.handleInputChange}
          />
          <p></p>
          <button>Submit Review</button>
        </form>
      </div>
    );
  }
}

export default ReviewInput;
