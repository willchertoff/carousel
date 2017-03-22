import React, { Component, PropTypes } from 'react';

class Carousel extends Component {
  static defaultProps = {
    data: [],
  }
  static propTypes = {
    data: PropTypes.array.isRequired,
  }
  render() {
    return (
      <div
        className="carousel"
      >
        Carousel
      </div>
    )
  }
}

export default Carousel;