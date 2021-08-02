import React from "react";
import Characteristics from './post-components/Characteristics.jsx';

class ReviewInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      summaryInput: "",
      summaryLength: null,
      starRating: null,
      sizeRating: null,
      widthRating: null,
      comfortRating: null,
      qualityRating: null,
      lengthRating: null,
      fitRating: null,
      bodyInput: "",
      bodyLength: null,
      displayInput: "",
      emailInput: "",
      recommended: null,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.recommendClick = this.recommendClick.bind(this);
    this.clickStarRating = this.clickStarRating.bind(this);
    this.clickCharacteristics = this.clickCharacteristics.bind(this);
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

    if (this.state.bodyInput.length === 50) {
      console.log('Minimum reached');
    }
  }

  handleInputSubmit(event) {
    event.preventDefault();

    // don't submit if
    // input fields are blank
    // recommended is null
    // summary is over 50 characters
    // body is under 50 characters
    // body is over 1000 characters

    var summaryLength = this.state.summaryLength;
    var bodyLength = this.state.bodyLength;
    var emailLength = this.state.emailInput.length;
    var displayLength = this.state.displayInput.length;

    if (summaryLength === 0 || bodyLength === 0 || emailLength === 0 || displayLength === 0) {
      alert("Blank field requires input");
      return;
    }
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
      product_Id: this.props.productId,
      body: this.state.bodyInput,
      // date: newDate,
      // helpfulness: 0,
      photos: [],
      rating: this.state.starRating,
      recommend: this.state.recommended,
      // response: null,
      // review_id: null,
      name: this.state.displayInput,
      // reviewer_name: this.state.displayInput,
      email: this.state.emailInput,
      summary: this.state.summaryInput,
      // need to have characteristics property
      characteristics: {
        Size: {
          value: this.state.sizeRating
        },
        Width: {
          value: this.state.widthRating
        },
        Comfort: {
          value: this.state.comfortRating
        },
        Quality: {
          value: this.state.qualityRating
        },
        Length: {
          value: this.state.lengthRating
        },
        Fit: {
          value: this.state.fitRating
        }
      }

    };

    // var newReview = {
    //   starRating: null,
    //   dateOfReview: newDate,
    //   reviewSummary: this.state.summaryInput,
    //   reviewBody: this.state.bodyInput,
    //   recommend: this.state.recommended,
    //   username: this.state.displayInput,
    //   helpfulnessYes: 0,
    //   helpfulnessNo: 0,
    // };

    this.props.clickSubmitReview(newReview);
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
    // console.log("recommended: ", this.state.recommended);
  }

  clickStarRating(event) {
    console.log('clicked rating: ', event.target.value);
    this.setState({
      starRating: parseInt(event.target.value)
    })
  }

  clickCharacteristics(event) {
    // console.log('clicked characteristic: ', event.target.value);
    this.setState({
      [event.target.name]: parseInt(event.target.value)
    })
    // console.log('fitRating: ', this.state.fitRating);
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleInputSubmit}>
          <p>Choose star rating here</p>
          {/* <button value="1" onClick={this.clickStarRating}>Poor</button>
          <button value="2" onClick={this.clickStarRating}>Fair</button>
          <button value="3" onClick={this.clickStarRating}>Average</button>
          <button value="4" onClick={this.clickStarRating}>Good</button>
          <button value="5" onClick={this.clickStarRating}>Great</button> */}
          <div>
            <input type="radio" name="starRating" value="1" onClick={this.clickStarRating}/>
            <label>Poor</label>
            <input type="radio" name="starRating" value="2" onClick={this.clickStarRating}/>
            <label>Fair</label>
            <input type="radio" name="starRating" value="3" onClick={this.clickStarRating}/>
            <label>Average</label>
            <input type="radio" name="starRating" value="4" onClick={this.clickStarRating}/>
            <label>Good</label>
            <input type="radio" name="starRating" value="5" onClick={this.clickStarRating}/>
            <label>Great</label>
          </div>

          <Characteristics clickCharacteristics={this.clickCharacteristics}/>

          <h5>Do you recommend this product?</h5>
          <div>
            <input type="radio" name="recommended" onClick={this.recommendClick} value="Yes" />
              <label>Yes</label>
            <input type="radio" name="recommended" onClick={this.recommendClick} value="No" />
              <label>No</label>
          </div>
          <h5>Review Summary</h5>
          <input
            name="summaryInput"
            placeholder="Example: Best purchase ever!"
            value={this.state.summaryInput}
            onChange={this.handleInputChange}
          />
          <h5>Review Body</h5>
          <input
            name="bodyInput"
            placeholder="Why did you like the product or not?"
            value={this.state.bodyInput}
            onChange={this.handleInputChange}
          />
          <p></p>
          <button>Upload Photos</button>
          <h5>Display Name</h5>
          <input
            name="displayInput"
            placeholder="Example: jackson11!"
            value={this.state.displayInput}
            onChange={this.handleInputChange}
          />
          <p>*** For privacy reasons, do not use your full name or email address. ***</p>
          <h5>Your email</h5>
          <input
            name="emailInput"
            placeholder="Example: jackson11@email.com"
            value={this.state.emailInput}
            onChange={this.handleInputChange}
          />
          <p> *** For authentication reasons, you will not be emailed. ***</p>
          <button>Submit Review</button>
        </form>
      </div>
    );
  }
}

export default ReviewInput;
