import React, { Component } from 'react';

import { ListGroup, ListGroupItem } from 'react-bootstrap';

let styles;

const Person = ({name}) => {
  return (
    <ListGroupItem>{name}</ListGroupItem>
  )
}

class Sidebar extends Component {

  render() {
    return (
      <div style={styles.sidebar}>
        <ListGroup>
          <ListGroupItem active>People</ListGroupItem>
          {
            this.props.people.map((person, i) => {
              return <Person key={i} name={person} />
            })
          }
        </ListGroup>
      </div>
    )
  }

}

export default Sidebar;


styles = {
  sidebar: {
    height: "100%",
    background: '#f5f5f5',
    padding: 20,
    overflowY: 'scroll'
  }
}

