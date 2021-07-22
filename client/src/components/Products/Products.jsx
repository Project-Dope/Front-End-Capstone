import React from "react";
import Carousel from "./Products-Components/Carousel.jsx";
import "./Products.css";

export default class Products extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row product-offer">
          <i>
            SALE/DISCOUNT OFFER - <a href="#">NEW PRODUCT HIGHLIGHT</a>
          </i>
        </div>
        <div className="row product-details">
          <div className="col-7 product-image-carousel">
            <div className="product-image-selection">
              <Carousel />
            </div>
            <div className="product-mini-image"></div>
          </div>
          <div className="col-5 product-selection">
            <div className="product-review"></div>
            <div className="product-name">Product Name</div>
            <div className="product-color"></div>
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
