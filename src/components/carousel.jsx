import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import image1 from '../images_carousel/chuckPreaching.jpg'
import image2 from '../images_carousel/prayForOutsideChurch.jpg'
import image3 from '../images_carousel/prayForMexico.jpg'
import image4 from '../images_carousel/prayForSpain.jpg'

const items = [
  {
    src: image1,
    altText: 'Chuck Preaching',
    caption: '',
    header: 'Chuck Perez'
  },
  {
    src: image2,
    altText: 'Pray for the church',
    caption: '',
    header: ''
  },
  {
    src: image3,
    altText: 'Pray for Mexico',
    caption: '',
    header: ''
  },
  {
    src: image4,
    altText: 'Pray for Spain',
    caption: '',
    header: 'Pray for Spain'
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;


