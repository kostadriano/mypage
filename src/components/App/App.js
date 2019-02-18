import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import NavbarIcons from '../Navbar/NavbarIcons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          <NavbarIcons/>
        </Navbar>
      </div>
    );
  }
};

export default App;
