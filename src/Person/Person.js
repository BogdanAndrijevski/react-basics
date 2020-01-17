import React from 'react';
import './Person.css';
import Radium from 'radium';
const person = (props) => {

    const style = {
        '@media (min-width: 500px)':{
            width: '70%',
            backgroundColor: 'red'
        }
    }
    return (
        <div className='Person'  style={style}>
            <p onClick={props.click}>I am {props.name}, I am {props.age} years old and my lucky number is {Math.floor(Math.random() * 30)}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default Radium(person);