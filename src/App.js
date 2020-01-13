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
    persons_2: [
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
    showPersons_2: false,
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

  switchNameHandler_2 = (newName) => {
    // console.log('was clicked');
    // DONT DO THIS : this.state.persons[0].name = "Marko"
    this.setState({
      persons_2: [
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

  nameChangeHandler_2 = (event) => {
    this.setState({
      persons_2: [
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

  togglePersonsHandler_2 = () => {
    const doesShow = this.state.showPersons_2;
    this.setState({ showPersons_2: !doesShow })
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

    let persons = null;
    let persons_2 = null;

    if (this.state.showPersons === true) {
      persons = (
        <div>
          <Person
            changed={this.nameChangeHandler}
            click={this.switchNameHandler.bind(this, 'Max!')}
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}>My Hobby:</Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age} />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        </div>
      )
    } // end IF

    if (this.state.showPersons_2 === true) {
      persons_2 = (
        <div>
          <Person
            changed={this.nameChangeHandler_2}
            click={this.switchNameHandler_2.bind(this, 'Max!')}
            name={this.state.persons_2[0].name}
            age={this.state.persons_2[0].age}>My Hobby:</Person>
          <Person
            name={this.state.persons_2[1].name}
            age={this.state.persons_2[1].age} />
          <Person
            name={this.state.persons_2[2].name}
            age={this.state.persons_2[2].age} />
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

        {/* -------------- Persons 2 -------------------- */}
        <div className='MainForPerson'>
          <h1>Hello_2</h1>
          <button
            style={style}
            onClick={this.togglePersonsHandler_2} >Toggle Persons_2</button>
          {/* onClick={() => this.switchNameHandler('Maximilian!!')} >Switch Name</button> */}
          {/* <button onClick={() => {return this.switchNameHandler()}} >Switch Name</button> */}

          {persons_2}
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
