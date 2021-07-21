import React from 'react';
import RatingsItemsList from './RatingsListItem.jsx';

var RatingsList = (props) => (

  <div>
    <h2>RatingsList</h2>
    {props.list.map((post, index) =>
      <RatingsItemsList post={post} key={index} />
    )}
  </div>

)

export default RatingsList;