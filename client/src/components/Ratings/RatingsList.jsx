import React from "react";
import RatingsItemsList from "./RatingsListItem.jsx";

var RatingsList = (props) => {
  // displays all reviews if no ratings are clicked
  if (
    !props.fiveRatingClicked &&
    !props.fourRatingClicked &&
    !props.threeRatingClicked &&
    !props.twoRatingClicked &&
    !props.oneRatingClicked
  ) {
    return (
      <div>
        {props.list.slice(0, props.listLength).map((post, index) => (
          <RatingsItemsList
            post={post}
            key={index}
            getReviewsList={props.getReviewsList}
          />
        ))}
      </div>
    );
  }

  // displays reviews based on clicked ratings
  return (
    <div>
      {props.list
        .filter((post) => {
          if (post.rating === 5 && props.fiveRatingClicked) {
            return post;
          } else if (post.rating === 4 && props.fourRatingClicked) {
            return post;
          } else if (post.rating === 3 && props.threeRatingClicked) {
            return post;
          } else if (post.rating === 2 && props.twoRatingClicked) {
            return post;
          } else if (post.rating === 1 && props.oneRatingClicked) {
            return post;
          } else {
            return null;
          }
        })
        .map((post, index) => (
          <RatingsItemsList
            post={post}
            key={index}
            getReviewsList={props.getReviewsList}
          />
        ))}
    </div>
  );
};

export default RatingsList;
