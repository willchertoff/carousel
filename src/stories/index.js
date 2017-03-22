import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Carousel from '../carousel';

storiesOf('Carousel, module')
  .add('with text', () => (
    <Carousel />
  ))