import React from "react";
import Nav from './common/Nav';
import NavMobile from './common/NavMobile';
import CopyCarousel from './common/CopyCarousel';
import Dev from './common/Dev';
import Grid from './common/Grid';
import Intro from './common/Intro';
import Bio from './common/Bio';
import MediaQuery from 'react-responsive';



export class Home extends React.Component {

  // render
  render() {

    return (
      <div>
        <MediaQuery minWidth={768}>
          <div className="main-image">
            <Nav />
          </div>
          <CopyCarousel />
          <Grid />
          <Intro />
          <div className="second-image">
          <Dev />
          </div>
          <Bio />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <div className="main-image-mobile">
            <NavMobile />
          </div>
          <CopyCarousel />
          <Grid />
          <Intro />
          <div className="second-image-mobile">
          <Dev />
          </div>
        </MediaQuery>
      </div>
    );

  }
}

export default Home;
