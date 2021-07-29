import React from 'react';
import RatingHelpfulNess from './post-components/RatingHelpfulness.jsx';
import axios from 'axios';

class RatingsItemsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }

    this.incrementHelpfulCount = this.incrementHelpfulCount.bind(this);
  }

  incrementHelpfulCount(event) {
    console.log(event.target.value);
    console.log('selectedItem: ', this.props.post);

    if (event.target.value === 'Yes') {
      // create Axios PATCH request for helpfulness

      // var updateObject = {
      //   helpfulness: this.props.post.helpfulness++
      // };
      this.props.post.helpfulness++;

      // console.log('updateObject: ', updateObject);

      axios.put(`api/reviews/${this.props.post.review_id}/helpful`, this.props.post)
      .then((response) => {
        console.log('response data: ', response.data)
      })
      .catch((err) => {
        console.log(err);
      })


    } else {
      // create Axios PATCH request for helpfulnessNo
    }
  }

  render() {

    return (
      <div>
        <p>{this.props.post.rating}</p>
        <p>{this.props.post.date}</p>
        <p>{this.props.post.summary}</p>
        <p>{this.props.post.body}</p>
        <p>{this.props.post.recommend}</p>
        <p>{this.props.post.reviewer_name}</p>
        <h4>Response to Review</h4>
        {/* <RatingHelpfulNess incrementHelpfulCount={this.incrementHelpfulCount} /> */}
        <h5>Was this review helpful?</h5>
        <button value="Yes" onClick={this.incrementHelpfulCount}>Yes</button>
        <button value="No" onClick={this.incrementHelpfulCount}>No</button>
        <h2>------------------------------------</h2>
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



// if Ubuntu copy/paste doesn't work
  // right click Ubuntu
    // go to Properties
      // check the box to enable Ctrl V