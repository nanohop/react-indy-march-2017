import React, { Component } from 'react';

import { 
  Panel, 
  FormGroup, 
  InputGroup,
  FormControl,
  Button
} from 'react-bootstrap';

let styles;

const Message = ({user, message}) => {
  return (
    <div>
      {user}
      <Panel>
        {message}
      </Panel>
    </div>
  )
}

class Messages extends Component {

  state = {
    message: ''
  }

  messageChanged = (e) => {
    this.setState({message: e.target.value});
  }

  sendMessage = (e) => {
    e.preventDefault();
    if(this.state.message.length > 0) {
      this.props.sendMessage(this.state.message);
      this.setState({message: ''});
    }
  }

  render() {
    const orderedMessages = this.props.messages.slice().reverse();

    return (
      <div style={styles.root}>
        <div style={styles.messages}>
          {
            orderedMessages.map((message, i) => {
              return <Message {...message} key={i} />
            })
          }
        </div>
        <div style={styles.input}>
          <form onSubmit={this.sendMessage}>
            <FormGroup>
              <InputGroup>
                <FormControl 
                  type="text" 
                  value={this.state.message} 
                  onChange={this.messageChanged}
                />
                <InputGroup.Button>
                  <Button
                    bsStyle="success" 
                    onClick={this.sendMessage}
                  >Send</Button>
                </InputGroup.Button>
              </InputGroup>
            </FormGroup>
          </form>
        </div>
      </div>
    )
  }

}

export default Messages;

styles = {
  root: {
    height: "100%",
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
  },
  messages: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column-reverse',
    overflowY: 'scroll'
  },
  input: {
    height: 60
  }
}

