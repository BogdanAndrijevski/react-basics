import React from 'react';
import './Person.css';
import Radium from 'radium';
const person = (props) => {
    return (
        <div className={'Person'}>
            <p onClick={props.click}>I am {props.name}, I am {props.age} years old and my lucky number is {Math.floor(Math.random() * 30)}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default Radium(person);