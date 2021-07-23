import React from 'react';
import axios from 'axios';
import './Ratings.css'
import RatingsList from './RatingsList.jsx';
import ratingsSeeds from './seeds.js';
import ReviewInput from './ReviewInput.jsx';
import RatingsBreakdown from './RatingsBreakdown.jsx';

export default class Ratings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ratingsList: ratingsSeeds,
      wasReviewClicked: false
    }

    this.clickAddReview = this.clickAddReview.bind(this);
    this.cancelAddReview = this.cancelAddReview.bind(this);
  }

  clickAddReview() {
    this.setState({
      wasReviewClicked: true
    })
  }

  cancelAddReview() {
    this.setState({
      wasReviewClicked: false
    })
  }

  render() {

    // console.log('ratingsList: ', ratingsSeeds)

    if (this.state.wasReviewClicked) {

      return (
        <div>
          <ReviewInput />
          <button onClick={this.cancelAddReview}>Cancel</button>
        </div>
      )

    } else {

      return (
        <div>
          <h1>Ratings</h1>
          <h4>Sort Options</h4>
          <select>
            <option>Relevant</option>
            <option>Newest</option>
            <option>Helpful</option>
          </select>
          <RatingsBreakdown />
          <h3>Reviews</h3>
          <RatingsList list={this.state.ratingsList} />
          <button>Show More Reviews</button>
          <button onClick={this.clickAddReview}>Add a Review</button>
        </div>
      );

    }

  }
}