import React from 'react';

class ReviewInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <form>
          <p>Choose star rating here</p>
          <p>Poor</p>
          <p>Fair</p>
          <p>Average</p>
          <p>Good</p>
          <p>Great</p>
          <h5>Do you recommend this product?</h5>
          <button>Yes</button>
          <button>No</button>
          <h5>Review Summary</h5>
          <input />
          <h5>Review Body</h5>
          <input />
          <p></p>
          <button>Upload Photos</button>
          <h5>Display Name</h5>
          <input />
          <h5>Your email</h5>
          <input />
          <p></p>
          <button>Submit Review</button>
        </form>
      </div>
    )
  }

}

export default ReviewInput;