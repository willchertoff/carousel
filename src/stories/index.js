import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Carousel from '../carousel';
import Data from '../data';

storiesOf('Carousel, module')
  .add('with text', () => (
    <Carousel
      data={Data}
    />
  ))