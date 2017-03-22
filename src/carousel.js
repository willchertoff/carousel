import React, { Component, PropTypes } from 'react';
import Rider from './rider';
import Counter from './counter';

import './css/style.css';

class Carousel extends Component {
  constructor(props) {
    super();
    this.state = {
      index: props.startingPoint,
      fading: false,
      text: props.data[props.startingPoint].text,
      subtext: props.data[props.startingPoint].subtext
    }
  }
  static defaultProps = {
    data: [
      {text: 'This is the defualt data value', subtext: 'You probably forgot to add the data prop'}
    ],
    height: '400px',
    startingPoint: 0
  }
  static propTypes = {
    data: PropTypes.array.isRequired,
    height: PropTypes.string.isRequired,
  }
  onCounterClick = (e) => {
    const { 
      index,
      data
    } = this.props;
    let clickedIndex = e.target.getAttribute('data-index');
    if (index === parseInt(clickedIndex)) return;
    this.setState({
      fading: true,
    })
    this.setState({
      index: parseInt(clickedIndex),
    });
    this.timer = setTimeout(()=> {
      this.setState({
        fading: false
      })
      this.setState({
        text: data[clickedIndex].text,
        subtext: data[clickedIndex].subtext
      })
    }, 750)
  }
  render() {
    const { 
      height,
      data
    } = this.props;
    const { 
      index,
      fading,
      text,
      subtext
    } = this.state;
    return (
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: height
        }}
      >
        <div
          style={{
            transform: 'translateY(-50%)',
            position: 'absolute',
            top: '50%',
            width: '100%',
          }}
        >
          <Rider
            text={text}
            subtext={subtext}
            fading={fading}
          />
        </div>
        <Counter
          index={index}
          items={data}
          onClick={this.onCounterClick}
        />
      </div>
    )
  }
}

export default Carousel;