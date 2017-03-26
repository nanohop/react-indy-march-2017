import React, { Component } from 'react';

import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import { 
  Navbar, 
  Nav 
} from 'react-bootstrap';

import ListItemLink from 'components/ListItemLink';

import Home from 'pages/Home';
import About from 'pages/About';

import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Navbar style={{marginBottom: 0}}>
            <Nav>
              <ListItemLink to="/">Home</ListItemLink>
              <ListItemLink to="/about">About</ListItemLink>
            </Nav>
          </Navbar>

          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    )
  }

}

export default App;
