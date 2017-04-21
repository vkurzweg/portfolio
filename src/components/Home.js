import React from "react";
import Nav from './common/Nav';
import CopyCarousel from './common/CopyCarousel';
import Dev from './common/Dev';
import Grid from './common/Grid';
import Masonry from './common/Masonry';
import Bio from './common/Bio';


export class Home extends React.Component {

  // render
  render() {

    return (
      <div>
        <div className="main-image">
          <Nav />
        </div>
        <CopyCarousel />
        <Grid />
        <Bio />
        <Dev />
      </div>
    );

  }
}

export default Home;
