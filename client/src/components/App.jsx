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
      render: false,
      products: [],
      currentProduct: {},
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    axios.get("api/products").then((response) =>
      this.setState({
        render: true,
        products: response.data,
        currentProduct: response.data[0],
      })
    );
  }

  render() {
    return (
      <>
        {this.state.render ? (
          <div className="container">
            <div className="Navbar">
              <NavBar />
            </div>
            <div className="Products">
              <Products currentProduct={this.state.currentProduct} />
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
        ) : (
          <></>
        )}
      </>
    );
  }
}
