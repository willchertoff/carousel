import React, { PropTypes } from 'react';

const propTypes = {
  text: PropTypes.string.isRequired,
  subtext: PropTypes.string.isRequired,
  fading: PropTypes.bool.isRequired,
};
const Rider = ({ text, subtext, fading }) =>
  <div
    className={fading ? 'fader faded' : 'fader'}
  >
    <h2
      style={{
        textAlign: 'center',
      }}
    >
      {text}
    </h2>
    <h3
      style={{
        textAlign: 'center',
      }}
    >
      {subtext}
    </h3>
  </div>;

Rider.propTypes = propTypes;

export default Rider;
