import React from 'react';

var Photos = (props) => {
  return (
    <span>
      <img className="questions-photos" src={props.photo.url} /> <span>&nbsp;</span>
    </span>
  )
}

export default Photos;