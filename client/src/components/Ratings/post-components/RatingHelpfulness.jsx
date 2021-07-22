import React from 'react';

class RatingHelpfulNess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

    // this.incrementHelpfulCount = this.incrementHelpfulCount.bind(this);
  }

  // incrementHelpfulCount() {

  // }

  render() {
    return (
      <div>
        <h5>Was this review helpful?</h5>
        <button>Yes</button>
        <button>No</button>
      </div>
    )
  }

}

export default RatingHelpfulNess;