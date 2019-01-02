import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import image1 from '../images/chuckFriends.jpg'
import image2 from '../images/chuckFamily.jpg'
import image3 from '../images/churchNotInMissions.jpg'

const items = [
  {
    src: image1,
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header'
  },
  {
    src: image2,
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src: image3,
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;