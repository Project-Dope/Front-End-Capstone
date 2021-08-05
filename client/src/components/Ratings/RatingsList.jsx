import React from 'react';
import RatingsItemsList from './RatingsListItem.jsx';

var RatingsList = (props) => {

  var allClicksFalse = true;

  for (var key in props.clickedRatings) {
    if (props.clickedRatings[key] === true) {
      allClicksFalse = false;
    }
  }

  if (allClicksFalse) {
    return (
      <div>
        {props.list.slice(0, props.listLength).map((post, index) =>
          <RatingsItemsList post={post} key={index} />
        )}
      </div>
    )
  }

  return (

    <div>
      {props.list.filter(post => {

        if (post.rating === 5 && props.clickedRatings.fiveRatingClicked) {
          return post;
        } else if (post.rating === 4 && props.clickedRatings.fourRatingClicked) {
          return post;
        } else if (post.rating === 3 && props.clickedRatings.threeRatingClicked) {
          return post;
        } else if (post.rating === 2 && props.clickedRatings.twoRatingClicked) {
          return post;
        } else if (post.rating === 1 && props.clickedRatings.oneRatingClicked) {
          return post;
        } else {
          return null;
        }

      }).map((post, index) =>
        <RatingsItemsList post={post} key={index} />
      )}
    </div>


  )


}

export default RatingsList;
