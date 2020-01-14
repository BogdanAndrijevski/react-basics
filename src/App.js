import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';
import Human from './Human/Human.js';
import Friend from './Friend/Friend.js';

class App extends Component {

  state = {
    persons: [
      { name: 'John', age: 26 },
      { name: 'Jack', age: 46 },
      { name: 'Michael', age: 35 }
    ],
    humans: [
      { name: 'John', age: 26 },
      { name: 'Jack', age: 46 },
      { name: 'Michael', age: 35 }
    ],
    friends: [
      { name: 'Buck', age: 26 },
      { name: 'Ash', age: 35 }
    ],
    otherState: 'other state',
    showPersons: false,
    showhumans: false,
    showFriends: false
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
    })
  }

  switchNameHandlerHuman = (newName) => {
    // console.log('was clicked');
    // DONT DO THIS : this.state.persons[0].name = "Marko"
    this.setState({
      humans: [
        { name: newName, age: 26 },
        { name: 'Jack', age: 46 },
        { name: 'Michael', age: 34 }
      ]
    })
  }

  changeFriendNameHandler = () => {
    this.setState({
      friends: [
        { name: 'Becker', age: 26 },
        { name: 'Reggie', age: 34 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 26 },
        { name: 'Jack', age: 46 },
        { name: 'Michael', age: 35 }
      ]
    })
  }

  nameChangeHandlerHuman = (event) => {
    this.setState({
      humans: [
        { name: event.target.value, age: 26 },
        { name: 'Jack', age: 46 },
        { name: 'Michael', age: 35 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  togglePersonsHandlerHuman = () => {
    const doesShow = this.state.showhumans;
    this.setState({ showhumans: !doesShow })
  }

  toggleFriendsHandler = () => {
    const doesShowFriends = this.state.showFriends;
    this.setState({ showFriends: !doesShowFriends })
  }


  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '2px solid lightgreen',
      padding: '8px',
      cursor: 'pointer',
      color: 'white'
    }

    const btnHumanStyle = {
      backgroundColor: 'blue',
      font: 'inherit',
      border: '2px solid lightblue',
      padding: '8px',
      cursor: 'pointer',
      color: 'white'
    }

    let persons = null;
    let humans = null;

    if (this.state.showPersons === true) {
      persons = (
        <div>
          {this.state.persons.map(person =>{
            return  <Person name={person.name} age={person.age} />
          })}
          {/* <Person
            changed={this.nameChangeHandler}
            click={this.switchNameHandler.bind(this, 'Max!')}
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}>My Hobby:</Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age} />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} /> */}
        </div>
      )
    } // end IF

    if (this.state.showhumans === true) {
      humans = (
        <div>
          <Human
            changed={this.nameChangeHandlerHuman}
            click={this.switchNameHandlerHuman.bind(this, 'Max!')}
            name={this.state.humans[0].name}
            age={this.state.humans[0].age}>My Hobby:</Human>
          <Human
            name={this.state.humans[1].name}
            age={this.state.humans[1].age} />
          <Human
            name={this.state.humans[2].name}
            age={this.state.humans[2].age} />
        </div>
      )
    }

    return (
      <div className="App">
        {/* -------------- Persons -------------------- */}
        <div className='MainForPerson'>
          <h1>Hello</h1>
          <button
            style={style}
            onClick={this.togglePersonsHandler} >Toggle Persons</button>
          {/* onClick={() => this.switchNameHandler('Maximilian!!')} >Switch Name</button> */}
          {/* <button onClick={() => {return this.switchNameHandler()}} >Switch Name</button> */}

          {persons}
        </div>

        {/* ------------------------------------------- */}

        {/* -------------- Humans -------------------- */}
        <div className='MainForHuman'>
          <h1>Human</h1>
          <button
            style={btnHumanStyle}
            onClick={this.togglePersonsHandlerHuman} >Toggle humans</button>
          {/* onClick={() => this.switchNameHandler('Maximilian!!')} >Switch Name</button> */}
          {/* <button onClick={() => {return this.switchNameHandler()}} >Switch Name</button> */}

          {humans}
        </div>

        {/* ------------------------------------------- */}



        {/* -------------- Friends -------------------- */}
        <div className='MainForFriend'>
          <button className='btnFriendNameChange' onClick={this.changeFriendNameHandler} >Friend Name Change</button>
          <button className='btnFriendToggle' onClick={this.toggleFriendsHandler} >Toggle Persons</button>

          {/* <button
            style={style}
            onClick={this.togglePersonsHandler} >Toggle Persons</button> */}

          {
            this.state.showFriends === true ?
              <div>
                <Friend
                  click={this.changeFriendNameHandler}
                  name={this.state.friends[0].name}
                  age={this.state.friends[0].age}>My Interests:</Friend>
                <Friend
                  name={this.state.friends[1].name}
                  age={this.state.friends[1].age} />
              </div>
              : null
          }
        </div>

        {/* ------------------------------------------- */}

      </div> // <div className="App">
    );
  }
}

export default App;

// ver 1.15 - 54. Handling Dynamic Content "The JavaScript Way"
