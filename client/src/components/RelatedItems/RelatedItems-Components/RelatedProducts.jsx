import React from "react";
import { BsStarFill } from "react-icons/bs";
import { Carousel } from "react-bootstrap";

const groupBy = (list) => {
  return list.reduce(
    (r, e, i) => (i % 4 ? r[r.length - 1].push(e) : r.push([e])) && r,
    []
  );
};

const RelatedProducts = (props) => {
  const relatedGroup = groupBy(Object.keys(props.state.relatedItems));

  return (
    <>
      <Carousel interval={null}>
        {relatedGroup.map((relatedList, index1) => {
          return (
            <Carousel.Item key={index1}>
              <div className="related-carousel">
                {relatedList.map((key, index2) => {
                  var index = index1 * 4 + index2;
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
                        onClick={() => props.setCurrentID(key)}
                      ></BsStarFill>
                      <div
                        className="related-thumbnail"
                        data-key={key}
                        onClick={props.onClickRelatedProduct}
                      >
                        <img
                          src={
                            props.state.relatedItems[key].photos.length
                              ? props.state.relatedItems[key].photos[0]
                                  .thumbnail_url
                              : null
                          }
                        />
                      </div>
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

export default RelatedProducts;
