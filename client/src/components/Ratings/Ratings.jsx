import React from 'react';
import ReactModal from 'react-modal';
import axios from 'axios';
import './Ratings.css';
import RatingsList from './RatingsList.jsx';
import ratingsSeeds from './seeds.js';
import ReviewInput from './ReviewInput.jsx';
import RatingsBreakdown from './RatingsBreakdown.jsx';
ReactModal.setAppElement('#app');

export default class Ratings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ratingsList: [],
      metaData: [],
      averageRating: '',
      ratingsCountList: [],
      wasReviewClicked: false,
      selectedSort: '',
      listViewLength: 2,
      fiveRatingClicked: false,
      fourRatingClicked: false,
      threeRatingClicked: false,
      twoRatingClicked: false,
      oneRatingClicked: false
    }

    this.getReviewsList = this.getReviewsList.bind(this);
    this.getMetaData = this.getMetaData.bind(this);
    this.clickAddReview = this.clickAddReview.bind(this);
    this.cancelAddReview = this.cancelAddReview.bind(this);
    this.selectSortOption = this.selectSortOption.bind(this);
    this.clickSubmitReview = this.clickSubmitReview.bind(this);
    this.showMoreReviews = this.showMoreReviews.bind(this);
    this.getAverageRating = this.getAverageRating.bind(this);
    this.getEachRatingCount = this.getEachRatingCount.bind(this);
    this.toggleRating = this.toggleRating.bind(this);
  }

  componentDidMount() {
    this.getReviewsList();
    this.getMetaData();
  }

  // re-invokes methods when props from parent is changed
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.getReviewsList();
      this.getMetaData();
    }
  }

  getReviewsList() {
    axios.get(`/api/reviews/${this.props.productId}`)
      .then((response) => {
        this.setState({
          ratingsList: response.data.results
        })
        console.log('Recevied response from Axios GET request in Ratings.jsx!');
      })
      .then(() => {
        this.getAverageRating(this.state.ratingsList);
        this.getEachRatingCount(this.state.ratingsList);

        console.log('ratingsList: ', this.state.ratingsList);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  getMetaData() {
    axios.get(`/api/reviews/meta/${this.props.productId}`)
      .then((response) => {
        this.setState({
          metaData: response.data
        })
      })
      .then(() => {
        // console.log('metaData: ', this.state.metaData);
        console.log('Received response from Axios POST request in client!');
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

    axios.post(`/api/reviews/`, addObject)
      .then(() => {
        this.setState({
          // ratingsList: [...this.state.ratingsList, addObject],
          wasReviewClicked: false
        })
        console.log('Received response from Axios POST request!');
      })
      .then(() => {
        this.getReviewsList();
      })
      .catch((err) => {
        console.log('Error received during Axios POST request');
      })

    console.log('new ratingsList: ', this.state.ratingsList);
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
    // if event.target.value is 'helpful'
    // if event.target.value is 'newest'
  }

  showMoreReviews(event) {
    this.setState({
      listViewLength: this.state.listViewLength += 2
    })
  }

  getAverageRating(ratingsArray) {
    var totalRating = 0;
    ratingsArray.forEach((number) => {
      totalRating += number.rating
    })
    var averageRating = totalRating / ratingsArray.length;

    this.setState({
      averageRating: averageRating.toFixed(1)
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

    this.setState({
      ratingsCountList: ratingObject
    })
  }

  toggleRating() {
    this.setState(prevState => ({
      [event.target.name]: !prevState[event.target.name]
    }))
  }


  render() {

    // console.log('selectedSort: ', this.state.selectedSort);
    // console.log('productId: ', this.props.productId);

    return (

      <div className="ratings">
        <h2>Ratings and Reviews</h2>
        <p></p>
        <h5>Sort By</h5>
        <div className="sortOptions">
        <select onChange={this.selectSortOption} value={this.state.selectedSort} >
          <option value="Relevant">Relevant</option>
          <option value="Newest">Newest</option>
          <option value="Helpful">Helpful</option>
        </select>
        </div>
        <div>
          <RatingsBreakdown
            list={this.state.ratingsList}
            metaData={this.state.metaData}
            toggleRating={this.toggleRating}
            averageRating={this.state.averageRating}
            ratingsCountList={this.state.ratingsCountList}
            />

        </div>
        <div className="ratingsList">
          <h3>Reviews</h3>
          <RatingsList
            list={this.state.ratingsList}
            listLength={this.state.listViewLength}
            oneRatingClicked={this.state.oneRatingClicked}
            twoRatingClicked={this.state.twoRatingClicked}
            threeRatingClicked={this.state.threeRatingClicked}
            fourRatingClicked={this.state.fourRatingClicked}
            fiveRatingClicked={this.state.fiveRatingClicked}
            getReviewsList={this.getReviewsList}
          />

          {this.state.listViewLength < this.state.ratingsList.length ? (<div className="showMoreReviews"><button  onClick={this.showMoreReviews}>Show More Reviews</button></div>) : null}

          <div className="addAReview" >
            <button onClick={this.clickAddReview}>Add a Review</button>
          </div>
        </div>
        <div>
          <ReactModal
          isOpen={this.state.wasReviewClicked}>
            <ReviewInput
              productId={this.props.productId}
              list={this.state.ratingsList}
              metaData={this.state.metaData}
              clickSubmitReview={this.clickSubmitReview} />
            <div>
              <button className="cancelReview" onClick={this.cancelAddReview}>Cancel</button>
            </div>
          </ReactModal>
        </div>
      </div>

    )

  }

}

