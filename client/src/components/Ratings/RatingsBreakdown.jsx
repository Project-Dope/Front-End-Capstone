import React from 'react';

class RatingsBreakdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // filteredList: [],
      wasRatingClicked: {
        fiveRatingClicked: false,
        fourRatingClicked: false,
        threeRatingClicked: false,
        twoRatingClicked: false,
        oneRatingClicked: false
      }
    }
    this.clickRating = this.clickRating.bind(this);
  }

  clickRating(event) {
    // console.log('clicked filter: ', event.target.name);

    // check if event.target.name was already clicked
    if (!this.state.wasRatingClicked[event.target.name]) {

      var filteredArray = [];

      // iterate over nested object in state
        // if states are true
          // use filter and push values to filteredArray
      this.props.list.filter((item) => {
        if (item.rating === parseInt(event.target.value)) {
          filteredArray.push(item);
        }
      })
      // console.log('filteredArray: ', filteredArray);
      this.props.filterByRating(filteredArray);

      this.setState({
        wasRatingClicked: {
          [event.target.name]: true
        }
      })

    } else {

      var filteredArrayTrue = [];

      this.props.filteredList.filter((item) => {
        if (item.rating !== parseInt(event.target.value)) {
          filteredArrayTrue.push(item);
        }
      })

      console.log('filteredArrayTrue: ', filteredArrayTrue);
      // this.props.deselectFilter(filteredArrayTrue);

      this.setState({
        wasRatingClicked: {
          [event.target.name]: false
        }
      })

    }
  }

  render() {

    return (
      <div>
        <h3>Ratings Summary</h3>
        <h4>Average Rating</h4>
        <h4>{this.props.averageRating}</h4>
        <p>Average Rating in stars</p>
        <h3>Ratings Breakdown</h3>
        <button name="fiveRatingClicked" value="5" onClick={this.clickRating}>5 Stars</button>
        <p>{this.props.ratingsCountList['5']}</p>
        <button name="fourRatingClicked" value="4" onClick={this.clickRating}>4 Stars</button>
        <p>{this.props.ratingsCountList['4']}</p>
        <button name="threeRatingClicked" value="3" onClick={this.clickRating}>3 Stars</button>
        <p>{this.props.ratingsCountList['3']}</p>
        <button name="twoRatingClicked" value="2" onClick={this.clickRating}>2 Stars</button>
        <p>{this.props.ratingsCountList['2']}</p>
        <button name="oneRatingClicked" value="1" onClick={this.clickRating}>1 Star</button>
        <p>{this.props.ratingsCountList['1']}</p>
      </div>

    )

  }


}

export default RatingsBreakdown;






// var RatingsBreakdown = (props) => (

//   <div>
//     <h3>Ratings Summary</h3>
//     <h4>Average Rating</h4>
//     <h4>{props.averageRating}</h4>
//     <p>Average Rating in stars</p>
//     <h3>Ratings Breakdown</h3>
//     <button name="fiveRatingClicked" value="5" onClick={props.filterByRating}>5 Stars</button>
//     <p>{props.ratingsCountList['5']}</p>
//     <button name="fourRatingClicked" value="4" onClick={props.filterByRating}>4 Stars</button>
//     <p>{props.ratingsCountList['4']}</p>
//     <button name="threeRatingClicked" value="3" onClick={props.filterByRating}>3 Stars</button>
//     <p>{props.ratingsCountList['3']}</p>
//     <button name="twoRatingClicked" value="2" onClick={props.filterByRating}>2 Stars</button>
//     <p>{props.ratingsCountList['2']}</p>
//     <button name="oneRatingClicked" value="1" onClick={props.filterByRating}>1 Star</button>
//     <p>{props.ratingsCountList['1']}</p>
//   </div>

// )