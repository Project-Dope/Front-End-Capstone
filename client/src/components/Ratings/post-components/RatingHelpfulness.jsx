import React from 'react';

var RatingHelpfulNess = (props) => {

  return (
    <div>
      <h5>Was this review helpful?</h5>
      <button value="Yes" onClick={props.incrementHelpfulCount}>Yes</button>
      <button value="No" onClick={props.incrementHelpfulCount}>No</button>
    </div>
  )

}

export default RatingHelpfulNess;

// Testing text to push into GitHub branch