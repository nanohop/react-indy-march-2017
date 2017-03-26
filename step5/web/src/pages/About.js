import React, { Component } from 'react';

import { PageHeader } from 'react-bootstrap';

class About extends Component {

  render() {
    return (
      <div style={{padding: 40, paddingTop: 0}}>
        <PageHeader>About</PageHeader>
        <p>Created for React.Indy, March 27, 2017</p>
      </div>
    )
  }

}

export default About;
