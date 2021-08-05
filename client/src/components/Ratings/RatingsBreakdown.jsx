import React from 'react';

class RatingsBreakdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
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
        <button name="fiveRatingClicked" value="5" onClick={this.props.toggleRating}>5 Stars</button>
        <p>{this.props.ratingsCountList['5']}</p>
        <button name="fourRatingClicked" value="4" onClick={this.props.toggleRating}>4 Stars</button>
        <p>{this.props.ratingsCountList['4']}</p>
        <button name="threeRatingClicked" value="3" onClick={this.props.toggleRating}>3 Stars</button>
        <p>{this.props.ratingsCountList['3']}</p>
        <button name="twoRatingClicked" value="2" onClick={this.props.toggleRating}>2 Stars</button>
        <p>{this.props.ratingsCountList['2']}</p>
        <button name="oneRatingClicked" value="1" onClick={this.props.toggleRating}>1 Star</button>
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