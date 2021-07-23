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
      wasReviewClicked: false,
      selectedSort: ''
    }

    this.clickAddReview = this.clickAddReview.bind(this);
    this.cancelAddReview = this.cancelAddReview.bind(this);
    this.selectSortOption = this.selectSortOption.bind(this);
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

  selectSortOption(event) {

    this.setState({
      selectedSort: event.target.value
    })

  }


  render() {

    // console.log('ratingsList: ', ratingsSeeds)
    console.log('selectedSort: ', this.state.selectedSort);

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
          <select onChange={this.selectSortOption} value={this.state.selectedSort} >
            <option value="Relevant">Relevant</option>
            <option value="Newest">Newest</option>
            <option value="Helpful">Helpful</option>
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