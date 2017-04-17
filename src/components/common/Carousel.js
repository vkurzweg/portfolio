import React from "react";
import TextCarousel from 'react-text-carousel';

const phrases = ['web development', 'UI design', 'copywriting', 'UX consulting', 'search marketing']
const interval = 3000;

export class Carousel extends React.Component {

  // render
  render() {

    return (
      <div style={{ display: 'block', width: '100%', margin: '0 auto', fontFamily: 'Share', textAlign: 'center', fontSize: '18px', marginTop: '3%' }}>
        <div style={{ display: 'inline-flex' }}>
          <p>Victoria Kurzweg does&nbsp;</p>
          <span style={{ fontWeight: 'bold' }}>
            <TextCarousel phrases={phrases} interval={interval} />
          </span>
          <p>in Los Angeles</p>
        </div>
      </div>
    );

  }
}

export default Carousel;
