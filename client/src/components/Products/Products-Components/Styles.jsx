import React from "react";
import axios from "axios";

export default class Styles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productID: this.props.productID,
    };

    if (this.props.productID) {
      this.getStyles();
    }
  }

  getStyles() {
    axios.get(`api/products/${this.state.productID}/styles`).then((res) => {
      console.log(res.data);
    });
  }

  render() {
    return (
      <div>
        <div></div>
      </div>
    );
  }
}
