import React, { Component } from 'react';

import Sidebar from 'pages/Home/Sidebar';
import Messages from 'pages/Home/Messages';
import EnterName from 'pages/Home/EnterName';

import * as api from 'api';

let styles;

class Home extends Component {

  state = {
    name: null,
    people: [],
    messages: []
  }

  componentDidMount() {
    this.pollRefresh();
  }

  pollRefresh = () => {
    this.refreshEverything();
    setTimeout(this.pollRefresh, 5000);
  }

  nameEntered = (name) => {
    this.setState({name: name});
    api.setName(name).then(() => {
      this.refreshEverything();
    });
  }

  sendMessage = (message) => {
    api.sendMessage(this.state.name, message).then(() => {
      this.refreshEverything();
    });    
  }

  refreshEverything = () => {
    api.people().then((people) => {
      this.setState({people});
      return api.messages();
    }).then((messages) => {
      this.setState({messages});
    });
  }

  render() {
    if(!this.state.name) {
      return <EnterName onEnter={this.nameEntered} />
    }

    return (
      <div style={styles.fullHeight}>
        <div style={{flex: 3}}>
          <Sidebar people={this.state.people} />
        </div>
        <div style={{flex: 9}}>
          <Messages 
            messages={this.state.messages} 
            sendMessage={this.sendMessage}
          />
        </div>
      </div>
    )
  }

}

export default Home;

styles = {
  fullHeight: {
    display: 'flex', 
    position: 'absolute', 
    top: 54, 
    bottom: 0, 
    left: 0, 
    right: 0
  }
}


