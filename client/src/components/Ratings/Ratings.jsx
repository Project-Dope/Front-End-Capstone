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
      ratingsList: [],
      averageRating: '',
      wasReviewClicked: false,
      selectedSort: '',
      listViewLength: 2
    }

    this.getReviewsList = this.getReviewsList.bind(this);
    this.clickAddReview = this.clickAddReview.bind(this);
    this.cancelAddReview = this.cancelAddReview.bind(this);
    this.selectSortOption = this.selectSortOption.bind(this);
    this.clickSubmitReview = this.clickSubmitReview.bind(this);
    this.showMoreReviews = this.showMoreReviews.bind(this);
    this.getAverageRating = this.getAverageRating.bind(this);
    this.getEachRatingCount = this.getEachRatingCount.bind(this);
  }

  componentDidMount() {
    this.getReviewsList();
  }

  getReviewsList() {
    axios.get(`/api/reviews/${this.props.productId}`)
    .then((response) => {

      this.setState({
        ratingsList: response.data.results
      })
      // console.log('response data: ', response.data);
      console.log('Recevied response from Axios GET request in Ratings.jsx!');
    })
    .then(() => {
      this.getAverageRating(this.state.ratingsList);
      this.getEachRatingCount(this.state.ratingsList);

      console.log('ratingsList: ', this.state.ratingsList);
      console.log('averageRating: ', this.state.averageRating);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  clickAddReview() {
    this.setState({
      wasReviewClicked: true
    })
  }

  clickSubmitReview(addObject) {
    console.log('addObject: ', addObject);

    this.setState({
      ratingsList: [...this.state.ratingsList, addObject],
      wasReviewClicked: false
    })

    // // invoke getReviewsList when POST req is functional
    // this.getReviewsList();
    // console.log('new ratingsList: ', this.state.ratingsList);
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

  showMoreReviews(event) {
    // console.log('Hello from showMoreReviews!');
    this.setState({
      listViewLength: this.state.listViewLength+=2
    })
    // console.log('listViewLength: ', this.state.listViewLength);
  }

  getAverageRating(ratingsArray) {
    // console.log('ratingsArray: ', ratingsArray);
    var totalRating = 0;
    ratingsArray.forEach((number) => {
      totalRating += number.rating
    })
    var averageRating = totalRating / ratingsArray.length;

    this.setState({
      averageRating: averageRating
    })
  }

  getEachRatingCount(ratingsArray) {

    var ratingObject = {};

    ratingsArray.forEach((number) => {
      if (ratingObject[number.rating] === undefined) {
        ratingObject[number.rating] = 1
      } else {
        ratingObject[number.rating]++;
      }
    })

    console.log('ratingObject: ', ratingObject);
  }


  render() {

    // console.log('ratingsList: ', ratingsSeeds)
    // console.log('selectedSort: ', this.state.selectedSort);
    // console.log('productId: ', this.props.productId);

    if (this.state.wasReviewClicked) {

      return (
        <div>
          <ReviewInput
            list={this.state.ratingsList}
            clickSubmitReview={this.clickSubmitReview} />
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
          <RatingsBreakdown
          list={this.state.ratingsList}
          averageRating={this.state.averageRating} />
          <h3>Reviews</h3>
          <RatingsList list={this.state.ratingsList} />
          <button onClick={this.showMoreReviews}>Show More Reviews</button>
          <button onClick={this.clickAddReview}>Add a Review</button>
        </div>
      );

    }

  }
}