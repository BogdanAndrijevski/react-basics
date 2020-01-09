import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Person/>
       
      </div>
    );
  }
}

export default App;

// ver 1.01 - tut 32. Creating a Functional Component
 