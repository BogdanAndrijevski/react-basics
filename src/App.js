import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {

  state = {
    persons: [
      { name: 'John', age : 26},
      { name: 'Jack', age : 46},
      { name: 'Michael', age : 35}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <button>Switch Name</button>
        <Person name={this.persons[0].name} age={this.persons[0].age}>My Hobby: </Person>
        <Person name={this.persons[1].name} age={this.persons[1].age}/>
        <Person name={this.persons[2].name} age={this.persons[2].age}/>
       
      </div>
    );
  }
}

export default App;

// ver 1.05 - 38. Understanding & Using State
 