import React from "react";
import axios from "axios";
import Table from "./RelatedItems-Components/Table.jsx";
import { Modal } from "react-bootstrap";
import { BsStarFill } from "react-icons/bs";
import "./RelatedItems.css";

export default class RelatedItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentID: null,
      relatedItems: null,
      showComparisonModal: false,
    };

    this.openComparisonModal = this.openComparisonModal.bind(this);
    this.onClickRelatedProduct = this.onClickRelatedProduct.bind(this);
  }

  componentDidMount() {
    this.getRelatedProducts();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      console.log("updated");
      this.getRelatedProducts();
    }
  }

  getRelatedProducts() {
    axios
      .get(`api/products/${this.props.currentProduct.id}/related`)
      .then((response1) => {
        var items = {};
        var counter = 0;
        response1.data.forEach((id) => {
          axios
            .get(`api/products/${id}`)
            .then((response2) => {
              items[response2.data.id] = response2.data;
            })
            .then(() => {
              axios
                .get(`api/products/${id}/styles`)
                .then((response3) => {
                  const styleData = response3.data.results[0];
                  items[id]["photos"] = styleData.photos;
                  items[id]["sale_price"] = styleData.sale_price;
                  items[id]["original_price"] = styleData.original_price;
                })
                .then(() => {
                  counter++;
                  if (Object.keys(items).length === counter) {
                    this.setState({
                      relatedItems: items,
                    });
                  }
                });
            });
        });
      });
  }

  onClickRelatedProduct(e) {
    this.props.setCurrentProduct(
      this.state.relatedItems[e.currentTarget.getAttribute("data-key")]
    );
  }

  openComparisonModal() {
    this.setState({
      showComparisonModal: !this.state.showComparisonModal,
    });
  }

  setCurrentID(key) {
    this.setState(
      {
        currentID: key,
      },
      () => {
        this.openComparisonModal();
      }
    );
  }

  render() {
    if (!this.state.relatedItems) return null;

    return (
      <div className="container">
        {this.state.currentID ? (
          <Modal
            show={this.state.showComparisonModal}
            onHide={this.openComparisonModal}
            dialogClassName="related-modal"
          >
            <Modal.Header closeButton>
              <Modal.Title>Product Comparison</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Table
                currentProduct={this.props.currentProduct}
                comparedProduct={this.state.relatedItems[this.state.currentID]}
              />
            </Modal.Body>
          </Modal>
        ) : (
          <></>
        )}
        <div className="row related-title">
          <h5>
            <b>Related Products</b>
          </h5>
        </div>
        <div className="row related-product">
          <div className="related-carousel">
            {Object.keys(this.state.relatedItems).map((key, index) => {
              return (
                <div className="related-card" key={index}>
                  <BsStarFill
                    className="related-star"
                    style={{
                      color: "white",
                      stroke: "black",
                      strokeWidth: "1",
                    }}
                    onMouseOver={({ target }) => (
                      (target.style.color = "black"),
                      (target.style.stroke = "white")
                    )}
                    onMouseOut={({ target }) => (
                      (target.style.color = "white"),
                      (target.style.stroke = "black")
                    )}
                    onClick={() => this.setCurrentID(key)}
                  ></BsStarFill>
                  <div
                    className="related-thumbnail"
                    data-key={key}
                    onClick={this.onClickRelatedProduct}
                  >
                    <img
                      src={
                        this.state.relatedItems[key].photos[0]
                          ? this.state.relatedItems[key].photos[0].thumbnail_url
                          : null
                      }
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="row related-outfit"></div>
      </div>
    );
  }
}
