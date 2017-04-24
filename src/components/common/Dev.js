import React from "react";
import { Steps, Icon, Button, message, Timeline } from 'antd';

const Step = Steps.Step;

const steps = [{
  title: 'Development',
  content:
    <div>
      <div style={{ display: 'inline-flex' }}>
        <div style={{ borderRight: '1px solid black'}}>
          <p style={{ textAlign: 'center', marginTop: '1%'}}><b>Responsive websites and applications</b> built with:</p>
          <img src="/media/logos.png" style={{ display: 'block', margin: '0 auto', marginRight: 'auto', height: '250px' }} />
        </div>
        <div style={{ marginLeft: '5%', width: '250px' }}>
          <p style={{ marginTop: '1%' }}><b>Featuring:</b></p>
          <ul style={{ listStyleType: 'circle', textAlign: 'left', marginLeft: '10%', marginTop: '5%', lineHeight: '200%' }}>
            <li>Stripe.js payment integration</li>
            <li>Facebook and Google authentication</li>
            <li>Google Maps geocoding</li>
            <li>CSS3 transitions & animations</li>
          </ul>
        </div>
      </div>
    </div>
}, {
  title: 'Design',
  content:
    <div>
      <h3>Wireframes, Prototypes & User Interfaces</h3>
      <div className="container" style={{ lineHeight: '200%', textAlign: 'center', display: 'block', margin: '0 auto', marginTop: '2%', width: '100%'}}>
        <div className="row" style={{ display: 'inline-flex' }}>
          <div className="col-md-4">
            <img src="/media/search.png" style={{ marginBottom: '5%'}} />
            <p><b>Professional design research</b> including user interviews and competitive analysis</p>
          </div>
          <div className="col-md-4">
            <img src="/media/mobile.png" style={{ marginBottom: '5%'}} />
            <p><b>Mobile-first wireframing and prototyping</b> using Sketch and InVision</p>
          </div>
          <div className="col-md-4">
            <img src="/media/responsive.png" style={{ marginBottom: '5%'}} />
            <p><b>Responsive framework and library integration</b> including Bootstrap and Material-UI</p>
          </div>
        </div>
      </div>
    </div>
}, {
  title: 'Content',
  content:
    <div>
      <div style={{ marginTop: '5%', width: '60%', margin: '0 auto', textAlign: 'left'}}>
        <p>
      </div>
    </div>
}]

export class Dev extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    }
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  // render
  render() {
    const { current } = this.state;
    return (
      <div style={{ display: 'block', margin: '0 auto', width: '100%', backgroundColor: '#FFFFFF' }}>
        <Steps current={current} style={{ paddingTop: '3%', width: '85%', margin: '0 auto', backgroundColor: '#FFFFFF' }}>
          <Step title="Development" icon={<Icon type="code-o" />} />
          <Step title="Design" icon={<Icon type="desktop" />} />
          <Step title="Content" icon={<Icon type="edit" />} />
        </Steps>
        <div className="steps-content">{steps[this.state.current].content}</div>
          <div className="steps-action">
            {
              this.state.current < steps.length
              &&
              <Button style={{ display: 'inline-block', margin: '0 auto' }} onClick={() => this.prev()}>
                <Icon type="arrow-left" />
              </Button>
            }
            {
              this.state.current < steps.length
              &&
              <Button style={{ display: 'inline-block', margin: '0 auto', marginLeft: '5%'}} type="primary" onClick={() => this.next()}><Icon type="arrow-right" /></Button>
            }
          </div>
      </div>
    );

  }
}

export default Dev;

// <div style={{ display: 'inline-flex', marginTop: '3%', fontSize: '14px' }}>
//   <ul style={{ listStyleType: 'circle', textAlign: 'left', lineHeight: '200%' }}>
//     <li>HTML5, CSS3, Javascript ES6</li>
//     <li>React + Redux and Angular</li>
//     <li>Node.js</li>
//     <li>MongoDB</li>
//   </ul>
//   <ul style={{ listStyleType: 'circle', textAlign: 'left', paddingLeft: '10%', lineHeight: '200%' }}>
//     <li>Stripe.js payment integration</li>
//     <li>Facebook and Google oAuth</li>
//     <li>Google Maps Geocoding</li>
//   </ul>
// </div>
