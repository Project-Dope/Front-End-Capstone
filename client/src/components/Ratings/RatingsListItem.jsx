import React from 'react';

class RatingsItemsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <div>
        <h3>RatingsItemsList</h3>
        <p>{this.props.post.starRating}</p>
        <p>{this.props.post.dateOfReview}</p>
        <p>{this.props.post.reviewSummary}</p>
        <p>{this.props.post.reviewBody}</p>
        <p>{this.props.post.recommend}</p>
        <p>{this.props.post.username}</p>
        <h4>Response to Review</h4>
        <h4>Rating Helpfulness</h4>
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