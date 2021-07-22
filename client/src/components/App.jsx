import React from "react";
import axios from "axios";
import NavBar from "./NavBar/NavBar.jsx";
import Products from "./Products/Products.jsx";
import RelatedItems from "./RelatedItems/RelatedItems.jsx";
import Questions from "./Questions/Questions.jsx";
import Ratings from "./Ratings/Ratings.jsx";
import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentProduct: "",
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="container">
        <div className="Navbar">
          <NavBar />
        </div>
        <div className="Products">
          <Products />
        </div>
        <div className="RelatedItems-OutfitCreation">
          <RelatedItems />
        </div>
        <div className="Questions-Answers">
          <Questions />
        </div>
        <div className="Ratings-Reviews">
          <Ratings />
        </div>
      </div>
    );
  }
}
