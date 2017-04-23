import React from "react";


export class Bio extends React.Component {

  // render
  render() {

    return (
      <div style={{ width: '100%', backgroundColor: '#212121', color: '#FAFAFA', textAlign: 'center', fontSize: '16px' }}>
        <div style={{ display: 'inline-flex', width: '100%' }}>
          <img src="/media/profile.jpg" alt="Victoria Kurzweg" style={{ height: '200px', marginTop: '5%', marginBottom: '5%', marginLeft: '10%'}} />
          <div style={{ marginTop: '5%', marginLeft: '3%' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '5%' }}>About Victoria</h3>
            <p>Some kind of about section with link to resume...</p>
          </div>
        </div>
        <p style={{ fontSize: '12px', textAlign: 'center', marginTop: '5%', paddingBottom: '2%'}}>Copyright 2017 Victoria Kurzweg</p>
      </div>
    );

  }
}

export default Bio;

