import React from "react";


export class Bio extends React.Component {

  // render
  render() {

    return (
      <div style={{ width: '100%', backgroundColor: '#212121', color: '#FAFAFA', textAlign: 'center', fontSize: '16px' }}>
        <div style={{ display: 'inline-flex', width: '100%' }}>
          <img src="/media/profile.jpg" alt="Victoria Kurzweg" style={{ height: '250px', marginTop: '2%', marginBottom: '2%', marginLeft: '5%'}} />
          <div style={{ marginTop: '8%', marginLeft: '3%' }}>
            <p style={{ fontSize: '14px', textAlign: 'left', marginRight: '5%', marginBottom: '5%' }}>Hello I'm Victoria Kurzweg, a web developer and designer based in West Hollywood. Before pivoting to tech in 2016, I worked in sales, international search marketing, journalism and public affairs.</p>
            <p style={{ fontSize: '14px', textAlign: 'left', marginRight: '5%', marginTop: '3%'}}>I was born in New Orleans and have lived many places including Austin, St. Louis and Washington, D.C. I have a master's in history of international relations from the London School of Economics.</p>
          </div>
        </div>
      </div>
    );

  }
}

export default Bio;

