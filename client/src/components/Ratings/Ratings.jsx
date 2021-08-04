import React from 'react';
import ReactModal from 'react-modal';
import axios from 'axios';
import './Ratings.css'
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
      filteredList: [],
      averageRating: '',
      ratingsCountList: [],
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
    this.filterByRating = this.filterByRating.bind(this);
    this.deselectFilter = this.deselectFilter.bind(this);
  }

  componentDidMount() {
    this.getReviewsList();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.getReviewsList();
    }
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
      // console.log('averageRating: ', this.state.averageRating);
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
      ratingsList: [...this.state.ratingsList, addObject]
      // wasReviewClicked: false
    })

    // axios.post(`reviews`, addObject)
    // .then(() => {
    //   console.log('Received response from Axios POST request!');
    // })
    // .catch((err) => {
    //   console.log('Error received during Axios POST request');
    // })

    // // invoke getReviewsList when POST req is functional
    // this.getReviewsList();
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
      listViewLength: this.state.listViewLength+=2
    })
  }

  getAverageRating(ratingsArray) {
    // console.log('ratingsArray: ', ratingsArray);
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
    // console.log('ratingsCountList: ', this.state.ratingsCountList);
  }

  filterByRating(inputArrayFalse) {
    console.log('inputArrayFalse: ', inputArrayFalse);

    this.setState({
      filteredList: inputArrayFalse
    })

    console.log('without selected filter: ', this.state.filteredList);
  }

  deselectFilter(inputArrayTrue) {
    console.log('inputArrayTrue: ', inputArrayTrue);

    this.setState({
      filteredList: inputArrayTrue
    })
    // cannot remove deselected filter
    console.log('after deselected filter: ', this.state.filteredList);
  }


  render() {

    // console.log('selectedSort: ', this.state.selectedSort);
    console.log('productId: ', this.props.productId);

      return (

        <div>
          <h1>Ratings</h1>
          <h4>Sort Options</h4>
          <select onChange={this.selectSortOption} value={this.state.selectedSort} >
            <option value="Relevant">Relevant</option>
            <option value="Newest">Newest</option>
            <option value="Helpful">Helpful</option>
          </select>
          <div>
            <RatingsBreakdown
            list={this.state.ratingsList}
            filteredList={this.state.filteredList}
            deselectFilter={this.deselectFilter}
            averageRating={this.state.averageRating}
            ratingsCountList={this.state.ratingsCountList}
            filterByRating={this.filterByRating} />
            <h3>Reviews</h3>
          </div>
          <div>
            <RatingsList
            list={this.state.ratingsList}
            listLength={this.state.listViewLength} />

            {this.state.listViewLength < this.state.ratingsList.length ? (<button onClick={this.showMoreReviews}>Show More Reviews</button>) : null}

            <button onClick={this.clickAddReview}>Add a Review</button>
          </div>
          <div>
          <ReactModal isOpen={this.state.wasReviewClicked}>
            <ReviewInput
              productId={this.props.productId}
              list={this.state.ratingsList}
              clickSubmitReview={this.clickSubmitReview} />
            <button onClick={this.cancelAddReview}>Cancel</button>
          </ReactModal>
          </div>
        </div>

      )


  }

}







// render() {

//   // console.log('selectedSort: ', this.state.selectedSort);
//   // console.log('productId: ', this.props.productId);

//   if (this.state.wasReviewClicked) {

//     return (
//       <div>
//         <Modal>
//         <ReviewInput
//           productId={this.props.productId}
//           list={this.state.ratingsList}
//           clickSubmitReview={this.clickSubmitReview} />
//         <button onClick={this.cancelAddReview}>Cancel</button>
//       </Modal>
//       </div>
//     )

//   } else {

//     return (
//       <div>
//         <h1>Ratings</h1>
//         <h4>Sort Options</h4>
//         <select onChange={this.selectSortOption} value={this.state.selectedSort} >
//           <option value="Relevant">Relevant</option>
//           <option value="Newest">Newest</option>
//           <option value="Helpful">Helpful</option>
//         </select>
//         <RatingsBreakdown
//         list={this.state.ratingsList}
//         filteredList={this.state.filteredList}
//         deselectFilter={this.deselectFilter}
//         averageRating={this.state.averageRating}
//         ratingsCountList={this.state.ratingsCountList}
//         filterByRating={this.filterByRating} />
//         <h3>Reviews</h3>
//         <RatingsList
//         list={this.state.ratingsList}
//         listLength={this.state.listViewLength} />
//         <button onClick={this.showMoreReviews}>Show More Reviews</button>
//         <button onClick={this.clickAddReview}>Add a Review</button>
//       </div>
//     );

//   }

// }
