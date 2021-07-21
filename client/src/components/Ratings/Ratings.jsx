import React from 'react';
import axios from 'axios';
import './Ratings.css'
import RatingsList from './RatingsList.jsx';
import ratingsSeeds from './seeds.js';

export default class Ratings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ratingsList: ratingsSeeds
    }
  }

  render() {

    console.log('ratingsList: ', ratingsSeeds)

    return (
      <div>
        <h1>Ratings</h1>
        <RatingsList list={this.state.ratingsList} />
      </div>
    );
  }
}