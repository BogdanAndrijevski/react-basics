import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';
import Friend from './Friend/Friend.js';

class App extends Component {

  state = {
    persons: [
      { name: 'John', age: 26 },
      { name: 'Jack', age: 46 },
      { name: 'Michael', age: 35 }
    ],
    friends: [
      { name: 'Buck', age: 26 },
      { name: 'Ash', age: 35 }
    ],
    otherState: 'other state'
  }


  switchNameHandler = (newName) => {
    // console.log('was clicked');
    // DONT DO THIS : this.state.persons[0].name = "Marko"
    this.setState({
      persons: [
        { name: newName, age: 26 },
        { name: 'Jack', age: 46 },
        { name: 'Michael', age: 34 }
      ]
    }
    )
  }

  changeFriendNameHandler = () => {
    this.setState({
      friends: [
        { name: 'Becker', age: 26 },
        { name: 'Reggie', age: 34 }
      ]
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <button onClick={() => this.switchNameHandler('Maximilian!!')} >Switch Name</button>
        {/* <button onClick={() => {return this.switchNameHandler()}} >Switch Name</button> */}
        <Person
          click={this.switchNameHandler.bind(this, 'Max!')}
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}>My Hobby:</Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age} />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />

        <button onClick={this.changeFriendNameHandler} >Friend Name Change</button>
        <Friend
          click={this.changeFriendNameHandler}
          name={this.state.friends[0].name}
          age={this.state.friends[0].age}>My Interests:</Friend>
        <Friend
          name={this.state.friends[1].name}
          age={this.state.friends[1].age} />
      </div>
    );
  }
}

export default App;

// ver 1.08 - 46. Passing Method References Between Components
