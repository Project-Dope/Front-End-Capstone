import React from 'react';
import RatingHelpfulNess from './post-components/RatingHelpfulNess.jsx';

class RatingsItemsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }

    this.incrementHelpfulCount = this.incrementHelpfulCount.bind(this);
  }

  incrementHelpfulCount(event) {
    if (event.target.value === 'Yes') {
      // create Axios PATCH request for helpfulnessYes
    } else {
      // create Axios PATCH request for helpfulnessNo
    }
  }

  render() {

    return (
      <div>
        <p>{this.props.post.starRating}</p>
        <p>{this.props.post.dateOfReview}</p>
        <p>{this.props.post.reviewSummary}</p>
        <p>{this.props.post.reviewBody}</p>
        <p>{this.props.post.recommend}</p>
        <p>{this.props.post.username}</p>
        <h4>Response to Review</h4>
        {/* <RatingHelpfulNess incrementHelpfulCount={this.incrementHelpfulCount} /> */}
        <h5>Was this review helpful?</h5>
        <button value="Yes" onClick={this.incrementHelpfulCount}>Yes</button>
        <button value="No" onClick={this.incrementHelpfulCount}>No</button>
        <h2>---------------------------</h2>
      </div>
    )

  }

}

export default RatingsItemsList;

// var RatingsItemsList = (props) => (
//   <div>
//     <h3>RatingsItemsList</h3>
//     <p>{props.post.starRating}</p>
//     <p>{props.post.dateOfReview}</p>
//     <p>{props.post.reviewSummary}</p>
//     <p>{props.post.reviewBody}</p>
//     <p>{props.post.recommend}</p>
//     <p>{props.post.username}</p>
//     <h4>Response to Review</h4>
//     <h4>Rating Helpfulness</h4>
//     <h2>---------------------------</h2>
//   </div>
// )