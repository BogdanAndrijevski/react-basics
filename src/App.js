import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  
  state = {
    persons: [
      { name: 'John', age: 26 },
      { name: 'Jack', age: 46 },
      { name: 'Michael', age: 35 }
    ]
  }


  switchNameHandler = () => {
    console.log('was clicked');
  }

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <button onClick={this.switchNameHandler} >Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;

// ver 1.06 - 40. Handling Events with Methods
// Fixing small errors : {this.persons[0].name} fixed to {this.state.persons[0].name}