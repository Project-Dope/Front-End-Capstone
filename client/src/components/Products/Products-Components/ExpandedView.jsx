import React from "react";
import { FaExpand } from "react-icons/fa";
import { Carousel, Modal } from "react-bootstrap";

const groupBy = (list) => {
  return list.reduce(
    (r, e, i) => (i % 4 ? r[r.length - 1].push(e) : r.push([e])) && r,
    []
  );
};

const ExpandedView = (props) => {
  return (
    <div className="product-image-expand">
      <FaExpand
        className="product-image-expand-icon"
        onClick={props.expandView}
      />
      {props.state.expandView ? (
        <Modal show={props.state.expandView} onHide={props.expandView}>
          <Modal.Header closeButton>
            <Modal.Title>Style: {props.state.currentStyles.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Carousel
              activeIndex={props.state.carouselIndex}
              onSelect={props.handleSelect}
              interval={null}
            >
              {props.state.currentStyles.photos.map((photo, index) => {
                return (
                  <Carousel.Item key={index}>
                    <img className="d-block w-75 mx-auto" src={photo.url} />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Modal.Body>
        </Modal>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ExpandedView;
