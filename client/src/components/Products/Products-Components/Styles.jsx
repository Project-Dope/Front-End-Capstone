import React from "react";
import axios from "axios";

const groupBy = (list) => {
  return list.reduce(
    (r, e, i) => (i % 4 ? r[r.length - 1].push(e) : r.push([e])) && r,
    []
  );
};

const Styles = (props) => {
  const stylesGroup = groupBy(props.styles);

  return (
    <>
      {stylesGroup.map((styleList, index1) => {
        return (
          <div
            className="product-styles-row"
            style={{ height: `${100 / stylesGroup.length}%` }}
            key={index1}
          >
            {styleList.map((style, index2) => {
              var index = index1 * 4 + index2;
              return (
                <div className="product-style-thumbnail" key={index}>
                  <img
                    src={style.photos[0] ? style.photos[0].thumbnail_url : null}
                    data-index={index}
                    onClick={props.changeStyles}
                  ></img>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default Styles;
