import React from 'react';
import axios from 'axios';
import './Ratings.css'
import RatingsList from './RatingsList.jsx';

export default class Ratings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h1>Ratings</h1>
        <RatingsList />
      </div>
    );
  }
}