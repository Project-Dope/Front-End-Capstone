import React from "react";
import Carousel from "./Products-Components/Carousel.jsx";
import Styles from "././Products-Components/Styles.jsx";
import axios from "axios";
import "./Products.css";

export default class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productID: this.props.currentProduct.id,
      name: "",
      slogan: "",
      price: "",
      category: "",
    };
  }

  componentDidMount() {
    this.getCurrentProduct();
  }

  getCurrentProduct() {
    axios.get(`/api/products/${this.state.productID}`).then((res) => {
      this.setState({
        productID: res.data.id,
        name: res.data.name,
        slogan: res.data.slogan,
        price: res.data.default_price,
        category: res.data.category,
      });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row product-offer">
          <i>
            SALE/DISCOUNT OFFER - <a href="#">NEW PRODUCT HIGHLIGHT</a>
          </i>
        </div>
        <div className="row product-details">
          <div className="col-7 product-image-gallery">
            <div className="product-image-selection">
              <Carousel />
            </div>
            <div className="product-mini-image"></div>
          </div>
          <div className="col-5 product-selection">
            <div className="product-information">
              <div className="product-review"></div>
              <div className="product-category">{this.state.category}</div>
              <div className="product-title">{this.state.name}</div>
              <div className="product-price">${this.state.price}</div>
            </div>
            <div className="product-styles">
              <Styles productID={this.state.productID} />
            </div>
            <div className="product-size-quantity">
              <select>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>X-Large</option>
              </select>
            </div>
            <div className="product-atc">
              <button>Add To Bag</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
