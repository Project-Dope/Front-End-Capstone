import React from 'react';
import './Questions.css'

export default class Questions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: ''
    }

  }


  render() {
    return (
      <div>
        <form>
          <label></label>
          <input className="questions-search-bar" type="text" placeholder="Have a question? Search for answers..."></input>
        </form>
        <div className="questions-component">
          <div className="questions-question">Q: </div>
          <div className="questions-answer">A: </div>
        </div>
        <div>
          <button>MORE ANSWERED QUESTIONS</button> <button>ADD A QUESTION</button>
        </div>
      </div>
    );
  }
}