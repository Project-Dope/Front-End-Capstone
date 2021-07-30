import React from 'react';

var RatingsBreakdown = (props) => (

  <div>
    <h3>Ratings Summary</h3>
    <h4>Average Rating</h4>
    <h4>{props.averageRating}</h4>
    <p>Average Rating in stars</p>
    <h3>Ratings Breakdown</h3>
    <button>5 Stars</button>
    <button>4 Stars</button>
    <button>3 Stars</button>
    <button>2 Stars</button>
    <button>1 Star</button>
  </div>

)

export default RatingsBreakdown;




// class RatingsBreakdown extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       subRatingList: []
//     }

//     this.calculateAverage = this.calculateAverage.bind(this);
//   }

//   componentDidMount() {
//     this.setState({
//       subRatingList: this.props.list
//     })
//     this.calculateAverage(this.state.subRatingList);
//   }

//   calculateAverage(ratingsList) {

//     // console.log('ratingsList from sub-component: ', ratingsList);

//     var totalRating = 0;
//     ratingsList.forEach((number) => {
//       totalRating += number.rating
//     })
//     var averageRating = totalRating / ratingsList.length;

//     console.log('averageRating from sub-component: ', averageRating);

//   }

//   render() {

//     return (

//       <div>
//         <h3>Ratings Summary</h3>
//         <h4>Average Rating</h4>
//         <h4>{this.props.averageRating}</h4>
//         <p>Average Rating in stars</p>
//         <h3>Ratings Breakdown</h3>
//         <button>5 Stars</button>
//         <button>4 Stars</button>
//         <button>3 Stars</button>
//         <button>2 Stars</button>
//         <button>1 Star</button>
//       </div>

//     )

//   }

// }