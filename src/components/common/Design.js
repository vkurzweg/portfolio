import React from "react";
import { Steps, Icon } from 'antd';
const Step = Steps.Step;

export class Dev extends React.Component {

  // render
  render() {

    return (
      <div>
        <Steps style={{ paddingTop: '3%', width: '80%', margin: '0 auto' }}>
          <Step status="process" title="Development" icon={<Icon type="code-o" />} />
          <Step status="wait" title="Design" icon={<Icon type="desktop" />} />
          <Step status="wait" title="Content" icon={<Icon type="edit" />} />
        </Steps>
      </div>
    );

  }
}

export default Dev;
