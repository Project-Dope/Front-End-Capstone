import React from "react";
import { Carousel } from "react-bootstrap";

const groupBy = (list) => {
  return list.reduce(
    (r, e, i) => (i % 6 ? r[r.length - 1].push(e) : r.push([e])) && r,
    []
  );
};

const ThumbnailCarousel = (props) => {
  const thumbnailGroup = groupBy(props.state.currentStyles.photos);
  const nextIcon = (
    <span className="carousel-control-next-icon product-image-carousel-icon"></span>
  );
  const prevIcon = (
    <span className="carousel-control-prev-icon product-image-carousel-icon"></span>
  );

  return (
    <>
      <Carousel interval={null} nextIcon={nextIcon} prevIcon={prevIcon}>
        {thumbnailGroup.map((thumbnailList, index1) => {
          return (
            <Carousel.Item key={index1}>
              <div
                className="product-styles-row"
                style={{ height: `${100 / thumbnailGroup.length}%` }}
              >
                {thumbnailList.map((thumbnail, index2) => {
                  var index = index1 * 6 + index2;
                  return (
                    <div
                      className="product-mini-image-box"
                      key={index}
                      onClick={() => props.handleSelect(index)}
                    >
                      <img
                        src={
                          thumbnail.thumbnail_url
                            ? thumbnail.thumbnail_url
                            : null
                        }
                      />
                    </div>
                  );
                })}
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};

export default ThumbnailCarousel;
