import React from "react";
import TextCarousel from 'react-text-carousel';

const phrases = ['web development', 'UX/UI design', 'copywriting', 'search marketing']
const interval = 3000;

export class CopyCarousel extends React.Component {

  // render
  render() {

    return (
      <div style={{ display: 'block', width: '100%', margin: '0 auto', fontFamily: 'Share', textAlign: 'center', fontSize: '18px', marginTop: '3%' }}>
        <div style={{ display: 'inline-flex' }}>
          <p>Victoria does&nbsp;</p>
          <span style={{ fontWeight: 'bold' }}>
            <TextCarousel phrases={phrases} interval={interval} />
          </span>
          <p>in Los Angeles</p>
        </div>
      </div>
    );

  }
}

export default CopyCarousel;
