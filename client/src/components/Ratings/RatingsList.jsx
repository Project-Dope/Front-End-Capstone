import React from 'react';
import RatingsItemsList from './RatingsListItem.jsx';

var RatingsList = (props) => (

  <div>
    {props.list.slice(0, props.listLength).map((post, index) =>
      <RatingsItemsList post={post} key={index} />
    )}
  </div>

)

export default RatingsList;


// var RatingsList = (props) => (

//   <div>
//     {props.list.map((post, index) =>
//       <RatingsItemsList post={post} key={index} />
//     )}
//   </div>

// )