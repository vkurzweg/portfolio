import React from "react";
import Nav from './common/Nav';
import CopyCarousel from './common/CopyCarousel';
import Dev from './common/Dev';
import Grid from './common/Grid';
import Intro from './common/Intro';
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
        <Intro />
        <Dev />
        <div className="second-image">
        </div>
        <Bio />
      </div>
    );

  }
}

export default Home;
