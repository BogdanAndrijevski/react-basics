import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person.js';
import Human from './Human/Human.js';
import Friend from './Friend/Friend.js';
// import styled from 'styled-components';


class App extends Component {

  state = {
    persons: [
      { id: 'asfa1', name: 'John', age: 26 },
      { id: 'vasdf1', name: 'Jack', age: 46 },
      { id: 'asdf11', name: 'Michael', age: 35 }
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


  switchNameHandlerHuman = (newName) => {
    // DONT DO THIS : this.state.persons[0].name = "Marko"
    this.setState({
      humans: [
        { name: newName, age: 26 },
        { name: 'Jack', age: 46 },
        { name: 'Michael', age: 34 }
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  changeFriendNameHandler = () => {
    this.setState({
      friends: [
        { name: 'Becker', age: 26 },
        { name: 'Reggie', age: 34 }
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

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
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


    // const style = {
    //   backgroundColor: 'green',
    //   font: 'inherit',
    //   border: '2px solid lightgreen',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   color: 'white',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // }

    // const btnHumanStyle = {
    //   backgroundColor: 'blue',
    //   font: 'inherit',
    //   border: '2px solid lightblue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   color: 'white'
    // }

    let persons = null;
    let btnClass = '';
    let btnHuman = [classes.btnHumanStyle];

    let humans = null;

    if (this.state.showPersons === true) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              // click={this.deletePersonHandler.bind(this,index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}

        </div>
      )
      btnClass = classes.Red;
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
      btnHuman.push(classes.Black);

    }


    // let classes = ['red', 'bold'].join(' '); // 'red bold' - result of join
    let assignedClasses = []; // ova e za 'zis is working'
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red)
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold)
    }

    return (

      <div className={classes.App}>
        {/* -------------- Persons -------------------- */}
        <div className={classes.MainForPerson}>
          <h1>Hello</h1>
          <p className={assignedClasses.join(' ')}>zis is working</p>
          <button
            className={btnClass}
            onClick={this.togglePersonsHandler} >
            Toggle Persons
          </button>
          {persons}
        </div>
        {/* ------------------------------------------- */}

        {/* -------------- Humans -------------------- */}
        <div className={classes.MainForHuman}>
          <h1>Human</h1>
          <button
            className={btnHuman.join(' ')}
            onClick={this.togglePersonsHandlerHuman} >Toggle humans</button>
          {humans}
        </div>
        {/* ------------------------------------------- */}

        {/* -------------- Friends -------------------- */}
        <div className={classes.MainForFriend}>
          <button className={classes.btnFriendNameChange} onClick={this.changeFriendNameHandler} >Friend Name Change</button>
          <button className={classes.btnFriendToggle} onClick={this.toggleFriendsHandler} >Toggle Persons</button>

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

      </div>  // <div className="App">


    );
  }
}

export default App;

// ver 1.35 - Clearing Up
