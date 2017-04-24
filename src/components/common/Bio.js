import React from "react";


export class Bio extends React.Component {

  // render
  render() {

    return (
      <div id="bio" style={{ width: '100%', backgroundColor: '#212121', color: '#FAFAFA', textAlign: 'center', fontSize: '16px' }}>
        <div style={{ display: 'inline-flex', width: '100%' }}>
          <img src="/media/profile.jpg" alt="Victoria Kurzweg" style={{ height: '250px', marginTop: '2%', marginBottom: '2%', marginLeft: '5%'}} />
          <div style={{ marginTop: '6%', marginLeft: '3%' }}>
            <p style={{ fontSize: '14px', textAlign: 'left', marginRight: '5%', marginBottom: '2%' }}>Hello I'm Victoria Kurzweg, a web developer and designer based in West Hollywood. Before pivoting to tech in 2016, I worked in sales, international search marketing, journalism and public affairs. I studied political science at Webster University and history of international relations at the London School of Economics.</p>
            <p style={{ fontSize: '14px', textAlign: 'left', marginRight: '5%', marginTop: '2%'}}>I love working on websites and applications at every stage of development, from ideation to iteration. I'm happy to create a website from scratch, or to revamp an existing site by applying new techniques and technologies. Let's talk!</p>
          </div>
        </div>
      </div>
    );

  }
}

export default Bio;

