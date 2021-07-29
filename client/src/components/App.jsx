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
      products: [],
      currentProduct: {},
    };

    this.setCurrentProduct = this.setCurrentProduct.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    axios.get("api/products").then((response) =>
      this.setState({
        products: response.data,
        currentProduct: response.data[0],
      })
    );
  }

  setCurrentProduct(product) {
    this.setState({
      currentProduct: product,
    });
  }

  render() {
    return (
      <>
        {this.state.products.length ? (
          <div className="container">
            <div className="Navbar">
              <NavBar />
            </div>
            <div className="Products">
              <Products currentProduct={this.state.currentProduct} />
            </div>
            <div className="RelatedItems-OutfitCreation">
              <RelatedItems
                currentProduct={this.state.currentProduct}
                setCurrentProduct={this.setCurrentProduct}
              />
            </div>
            <div className="Questions-Answers">
              <Questions />
            </div>
            <div className="Ratings-Reviews">
              <Ratings productId={this.state.currentProduct.id} />
            </div>
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }
}
