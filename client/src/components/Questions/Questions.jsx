import React from 'react';
import './Questions.css'

export default class Questions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: ''
    }

    this.onChange = this.onChange.bind(this);

  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state.searchValue);

  }

  render() {
    return (
      <div>
        <form>
          <label></label>
          <input className="questions-search-bar" value={this.state.searchValue} onChange={this.onChange} name="searchValue" type="text" placeholder="Have a question? Search for answers..."></input>
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