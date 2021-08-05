import React from "react";
import Characteristics from './post-components/Characteristics.jsx';
import UploadPhotos from './post-components/UploadPhotos.jsx';
import StarRating from "react-star-rating-component";
import ReactModal from 'react-modal';
ReactModal.setAppElement('#app');

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
      wasPhotoUploadClicked: false,
      rating_empty_initial: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.recommendClick = this.recommendClick.bind(this);
    this.clickStarRating = this.clickStarRating.bind(this);
    this.clickCharacteristics = this.clickCharacteristics.bind(this);
    this.clickPhotoUpload = this.clickPhotoUpload.bind(this);
    this.cancelPhotoUpload = this.cancelPhotoUpload.bind(this);
    this.onStarClickEmptyInitial = this.onStarClickEmptyInitial.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });

    if (event.target.name === "summaryInput") {
      this.setState({
        summaryLength: this.state.summaryInput.length,
      });
    } else if (event.target.name === "bodyInput") {
      this.setState({
        bodyLength: this.state.bodyInput.length,
      });
    }

    if (this.state.bodyInput.length === 50) {
      console.log('Minimum reached');
    }
  }

  handleInputSubmit(event) {
    event.preventDefault();

    // check minimum requirements
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

    // input object for POST request
    var newReview = {
      product_id: this.props.productId,
      body: this.state.bodyInput,
      photos: [],
      rating: this.state.rating_empty_initial,
      recommend: this.state.recommended,
      name: this.state.displayInput,
      email: this.state.emailInput,
      summary: this.state.summaryInput,
      characteristics: {}

    };

    // using conditionals to add to characteristics object based on meta data
    var metaData = this.props.metaData.characteristics;

    if (this.state.sizeRating !== null) {
      newReview.characteristics[metaData.Size.id] = this.state.sizeRating
    }
    if (this.state.widthRating !== null) {
      newReview.characteristics[metaData.Width.id] = this.state.widthRating
    }
    if (this.state.comfortRating !== null) {
      newReview.characteristics[metaData.Comfort.id] = this.state.comfortRating
    }
    if (this.state.qualityRating !== null) {
      newReview.characteristics[metaData.Quality.id] = this.state.qualityRating
    }
    if (this.state.lengthRating !== null) {
      newReview.characteristics[metaData.Length.id] = this.state.lengthRating
    }
    if (this.state.fitRating !== null) {
      newReview.characteristics[metaData.Fit.id] = this.state.fitRating
    }

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
  }

  clickStarRating(event) {
    console.log('clicked rating: ', event.target.value);
    this.setState({
      starRating: parseInt(event.target.value)
    })
  }

  clickCharacteristics(event) {
    this.setState({
      [event.target.name]: parseInt(event.target.value)
    })
  }

  clickPhotoUpload() {
    this.setState({
      wasPhotoUploadClicked: true
    })
  }

  cancelPhotoUpload() {
    this.setState({
      wasPhotoUploadClicked: false
    })
  }

  onStarClickEmptyInitial(nextValue, prevValue, name) {
    // console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);

    // nextValue is the star rating chosen
    this.setState({
      rating_empty_initial: nextValue
    });
  }

  render() {

    // console.log('metaData from ReviewInput: ', this.props.metaData.characteristics);

    return (
      <div>
        <form onSubmit={this.handleInputSubmit}>
          <h5>Choose star rating here</h5>
          <div style={{fontSize: 35}}>
            <StarRating
            name="inputStarRating"
            starCount={5}
            value={this.state.rating_empty_initial}
            onStarClick={this.onStarClickEmptyInitial}
            />
          </div>
          <div>
            <Characteristics
            clickCharacteristics={this.clickCharacteristics}
            metaData={this.props.metaData.characteristics}/>
          </div>
          <div>
            <h2></h2>
            <h5>Do you recommend this product?</h5>
            <input type="radio" name="recommended" onClick={this.recommendClick} value="Yes" />
              <label>Yes</label>&nbsp;&nbsp;
            <input type="radio" name="recommended" onClick={this.recommendClick} value="No" />
              <label>No</label>
          </div>
          <div>
            <h2></h2>
            <h5>Review Summary</h5>
            <input
              name="summaryInput"
              placeholder="Example: Best purchase ever!"
              value={this.state.summaryInput}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <h2></h2>
            <h5>Review Body</h5>
            <input
              name="bodyInput"
              placeholder="Why did you like the product or not?"
              value={this.state.bodyInput}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <p></p>
            <button onClick={this.clickPhotoUpload}>Upload Photos</button>
            <ReactModal isOpen={this.state.wasPhotoUploadClicked}>
              <UploadPhotos />
              <button onClick={this.cancelPhotoUpload}>Go Back</button>
            </ReactModal>
          </div>
          <div>
            <h5>Display Name</h5>
            <input
              name="displayInput"
              placeholder="Example: jackson11!"
              value={this.state.displayInput}
              onChange={this.handleInputChange}
            />
            <p>*** For privacy reasons, do not use your full name or email address. ***</p>
          </div>
          <div>
            <h5>Your email</h5>
            <input
              name="emailInput"
              placeholder="Example: jackson11@email.com"
              value={this.state.emailInput}
              onChange={this.handleInputChange}
            />
            <p> *** For authentication reasons, you will not be emailed. ***</p>
          </div>
          <button>Submit Review</button>
        </form>
      </div>
    );
  }
}

export default ReviewInput;



{/* <div>
  <p>Choose star rating here</p>
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
</div> */}


// SAMPLE TEMPLATE FOR POST REQUEST

// {
//   "product_id": 16056,
//   "body": "Recently received my jeans in the mail. It's a great fit and looks great! Definitely would like to shop more from here and check out the rest of the catalog!",
//   "photos": [],
//   "rating": 5,
//   "recommend": true,
//   "name": "jane1234",
//   "email": "jane@aol.com",
//   "summary": "Great product!",
//   "characteristics": {
//     "53841": 5,
//     "53842": 5,
//     "53843": 5,
//     "53844": 5
//   }
// }