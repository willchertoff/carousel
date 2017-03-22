/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { PropTypes } from 'react';

const propTypes = {
  index: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

const Counter = ({ index, items, onClick }) =>
  <div
    style={{
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
    }}
  >
    {
      items
        .map((item, i) =>
          <div
            style={{
              height: '10px',
              width: '10px',
              borderRadius: '50%',
              display: 'inline-block',
              marginRight: '10px',
              cursor: 'pointer',
            }}
            className={i === index ? 'counter-circle index' : 'counter-circle'}
            onClick={onClick}
            data-index={i}
          />
        )
    }
  </div>;

Counter.propTypes = propTypes;

export default Counter;
