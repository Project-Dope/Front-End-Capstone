import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: "",
    };
  }

  render() {
    return (
      <div>
        <FaArrowLeft />
        <FaArrowRight />
      </div>
    );
  }
}
