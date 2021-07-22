import React from 'react';

class RatingHelpfulNess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

    this.incrementHelpfulCount = this.incrementHelpfulCount.bind(this);
  }

  incrementHelpfulCount(event) {

    console.log('Hello from incrementHelpfulCount!');

  }

  render() {
    return (
      <div>
        <h5>Was this review helpful?</h5>
        <button value="Yes" onClick={this.incrementHelpfulCount}>Yes</button>
        <button value="No" onClick={this.incrementHelpfulCount}>No</button>
      </div>
    )
  }

}

export default RatingHelpfulNess;