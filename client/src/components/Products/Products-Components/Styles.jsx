import React from "react";
import axios from "axios";

export default class Styles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      styles: [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.styles !== state.styles) {
      return {
        styles: props.styles,
      };
    }
    return null;
  }

  render() {
    return (
      <>
        {this.state.styles.map((style, index) => {
          return (
            <div className="product-style-thumbnail" key={index}>
              <img
                src={style.photos[0].thumbnail_url}
                data-index={index}
                onClick={this.props.onClickStyles}
              ></img>
            </div>
          );
        })}
      </>
    );
  }
}
