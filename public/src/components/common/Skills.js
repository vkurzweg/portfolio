import React from "react";
import Dev from './Dev';
import Design from './Design';
import Content from './Content';
import { Carousel } from 'antd';


export class Skills extends React.Component {

  // render
  render() {

    return (
      <div>
        <Carousel>
            <div>
              <Dev />
            </div>
            <div>
              <Design />
            </div>
            <div>
              <Content /
            ></div>
          </Carousel>
      </div>
    );

  }
}

export default Skills;

