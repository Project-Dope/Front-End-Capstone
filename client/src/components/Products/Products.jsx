import React from "react";
// import Carousel from "./Products-Components/Carousel.jsx";
import Styles from "././Products-Components/Styles.jsx";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import "./Products.css";

export default class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      slogan: "",
      price: "",
      category: "",
      carouselIndex: 0,
      styles: [],
      currentStyles: {},
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.onClickStyles = this.onClickStyles.bind(this);
  }

  componentDidMount() {
    this.getCurrentProduct();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.getCurrentProduct();
    }
    // if (prevState !== this.state) {
    //   console.log("previos", prevState);
    //   console.log("current", this.state);
    //   this.handleSelect(0);
    // }
  }

  getCurrentProduct() {
    axios
      .get(`/api/products/${this.props.currentProduct.id}`)
      .then((res) => {
        this.setState({
          name: res.data.name,
          slogan: res.data.slogan,
          price: res.data.default_price,
          category: res.data.category,
        });
      })
      .then(() => {
        this.getStyles();
      });
  }

  getStyles() {
    axios
      .get(`api/products/${this.props.currentProduct.id}/styles`)
      .then((res) => {
        this.setState({
          styles: res.data.results,
          currentStyles: res.data.results[0],
          carouselIndex: 0,
        });
      });
  }

  onClickStyles(e) {
    this.setState({
      currentStyles: this.state.styles[e.target.getAttribute("data-index")],
    });
  }

  handleSelect(selectedIndex) {
    this.setState({
      carouselIndex: selectedIndex,
    });
  }

  render() {
    if (!this.state.styles.length) return null;

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
              <Carousel
                fade
                activeIndex={this.state.carouselIndex}
                onSelect={this.handleSelect}
                interval={null}
              >
                {/* {console.log(this.state.currentStyles)} */}
                {this.state.currentStyles.photos.map((photo, index) => {
                  return (
                    <Carousel.Item key={index}>
                      <img
                        className="d-block w-75 mx-auto"
                        src={photo.url}
                        alt="First slide"
                      />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </div>
            <div className="product-mini-image">
              {this.state.currentStyles.photos.map((photo, index) => {
                return (
                  <div
                    className="product-mini-image-box"
                    key={index}
                    onClick={() => this.handleSelect(index)}
                  >
                    <img src={photo.thumbnail_url} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-5 product-selection">
            <div className="product-information">
              <div className="product-review"></div>
              <div className="product-category">{this.state.category}</div>
              <div className="product-title">{this.state.name}</div>
              <div className="product-price">${this.state.price}</div>
            </div>
            <div className="product-styles">
              <Styles
                styles={this.state.styles}
                onClickStyles={this.onClickStyles}
              />
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
