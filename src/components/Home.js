import React from "react";
import Nav from './common/Nav';
import Carousel from './common/Carousel';
import Grid from './common/Grid';



export class Home extends React.Component {

  // render
  render() {

    return (
      <div>
        <div className="main-image">
          <Nav />
        </div>
        <Carousel />
        <Grid />
      </div>
    );

  }
}

export default Home;
