import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I am {props.name}, I am {props.age} years old and my lucky number is {Math.floor(Math.random() * 30)}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;