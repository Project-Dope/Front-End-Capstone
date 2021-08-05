import React from "react";
import ExpandedView from "./Products-Components/ExpandedView.jsx";
import Styles from "././Products-Components/Styles.jsx";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import "./Products.css";

export default class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      carouselIndex: 0,
      expandView: false,
      styles: [],
      currentStyles: {},
      currentSize: null,
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.changeStyles = this.changeStyles.bind(this);
    this.changeSize = this.changeSize.bind(this);
    this.expandView = this.expandView.bind(this);
    // this.myDiv = React.createRef();
  }

  componentDidMount() {
    this.initializeStyles();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.initializeStyles();
      // console.log(this.myDiv);
    }
  }

  initializeStyles() {
    axios
      .get(`api/products/${this.props.currentProduct.id}/styles`)
      .then((res) => {
        const results = res.data.results;
        this.setState({
          carouselIndex: 0,
          styles: results,
          currentStyles: results[0],
          // currentSize: Object.keys(results[0].skus)[0],
        });
      });
  }

  changeStyles(e) {
    this.setState({
      carouselIndex: 0,
      currentStyles: this.state.styles[e.target.getAttribute("data-index")],
      currentSize: null,
    });
  }

  changeSize(e) {
    this.setState({
      currentSize: e.target.value,
    });
  }

  handleSelect(selectedIndex) {
    this.setState({
      carouselIndex: selectedIndex,
    });
  }

  expandView() {
    this.setState({
      expandView: !this.state.expandView,
    });
  }

  // addToCart() {
  //   if(this.state.)
  // }

  render() {
    if (!this.state.styles.length) return null;

    const quantity = this.state.currentSize
      ? this.state.currentStyles.skus[this.state.currentSize].quantity
      : 0;

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
              <ExpandedView
                expandView={this.expandView}
                handleSelect={this.handleSelect}
                state={this.state}
              />
              <Carousel
                fade
                activeIndex={this.state.carouselIndex}
                onSelect={this.handleSelect}
                interval={null}
              >
                {this.state.currentStyles.photos.map((photo, index) => {
                  return (
                    <Carousel.Item key={index}>
                      <img
                        className="d-block w-75 mx-auto"
                        src={photo.url}
                        alt="First slide"
                        onClick={this.expandView}
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
              <div className="product-category">
                {this.props.currentProduct.category}
              </div>
              <div className="product-title">
                {this.props.currentProduct.name}
              </div>
              <div className="product-price">
                ${this.props.currentProduct.default_price}
              </div>
            </div>
            <div className="product-styles" ref={this.myDiv}>
              <Styles
                styles={this.state.styles}
                changeStyles={this.changeStyles}
                // div={this.}
              />
            </div>
            <div className="product-size-quantity">
              {/* <text>Please select size</text> */}
              <div className="product-selectors">
                <select onChange={this.changeSize} defaultValue={"DEFAULT"}>
                  <option disabled="disabled" value="DEFAULT">
                    Select Size
                  </option>
                  {Object.keys(this.state.currentStyles.skus).map(
                    (key, index) => {
                      return (
                        <option key={index} value={key}>
                          {this.state.currentStyles.skus[key].size}
                        </option>
                      );
                    }
                  )}
                </select>
                <select className="product-quantity">
                  {quantity < 15
                    ? Array.from({ length: quantity }, (_, i) => i + 1).map(
                        (num, index) => {
                          return <option key={index}>{num}</option>;
                        }
                      )
                    : Array.from({ length: 15 }, (_, i) => i + 1).map(
                        (num, index) => {
                          return <option key={index}>{num}</option>;
                        }
                      )}
                </select>
              </div>
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
