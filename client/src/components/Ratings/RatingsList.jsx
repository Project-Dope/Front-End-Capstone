import React from 'react';
import RatingsItemsList from './RatingsListItem.jsx';

var RatingsList = (props) => (

  <div>
    {props.list.map((post, index) =>
      <RatingsItemsList post={post} key={index} />
    )}
  </div>

)

export default RatingsList;