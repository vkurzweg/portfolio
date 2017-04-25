import React from "react";


export class Masonry extends React.Component {

  // render
  render() {
    const screenshots = ['eventmakr item', 'bookmarc item', 'other item', 'hilton item', 'tripific item', 'slot item' ]

    const images = screenshots.map((screenshot, i) => {
      return (
        <div className={screenshot} key={i} />
        )
    })

    return (
      <div className="wrapper">
        <div className="masonry">
          {images}
        </div>
      </div>
    );

  }
}

export default Masonry;
