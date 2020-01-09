import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Person name="John" age="26">My Hobby: </Person>
        <Person name="Jack" age="46"/>
        <Person name="Michael" age="35"/>
       
      </div>
    );
  }
}

export default App;

// ver 1.04 - tut 37. Understanding the Children Property
 