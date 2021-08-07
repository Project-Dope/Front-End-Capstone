import React from 'react';

var Photos = (props) => {
  if (props.type === 'modal') {
    return (
      <span>
        <img className="questions-modal-preview" src={props.photo} /> <span>&nbsp;</span>
      </span>
    )
  }

  return (
    <span>
      <img className="questions-photos" src={props.photo.url} /> <span>&nbsp;</span>
    </span>
  )
}

export default Photos;