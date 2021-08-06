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
  const photoGroup = groupBy(props.state.currentStyles.photos);

  return (
    <div
      className="product-image-expand"
      onMouseOver={({ target }) => (
        (target.style.color = "white"), (target.style.stroke = "black")
      )}
      onMouseOut={({ target }) => (
        (target.style.color = "black"), (target.style.stroke = "white")
      )}
    >
      <FaExpand
        className="product-image-expand-icon"
        onClick={props.expandView}
        style={{
          color: "black",
          stroke: "white",
          strokeWidth: "1",
        }}
      />
      {props.state.expandView ? (
        <Modal
          show={props.state.expandView}
          onHide={props.expandView}
          // dialogClassName="product-modal"
        >
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
            <Carousel interval={null}>
              {photoGroup.map((photoList, index1) => {
                return (
                  <Carousel.Item>
                    <div
                      className="product-image-expand-thumbnail-row"
                      style={{ height: `${100 / photoGroup.length}%` }}
                      key={index1}
                    >
                      {photoList.map((photo, index2) => {
                        var index = index1 * 4 + index2;
                        return (
                          <div className="product-style-thumbnail" key={index}>
                            <img
                              src={
                                photo.thumbnail_url ? photo.thumbnail_url : null
                              }
                              data-index={index}
                              onClick={() => props.handleSelect(index)}
                            ></img>
                          </div>
                        );
                      })}
                    </div>
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
