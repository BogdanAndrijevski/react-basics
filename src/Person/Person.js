import React from 'react';

const person = (props) => {
return <p>I am {props.name}, I am {props.age} years old and my lucky number is {Math.floor(Math.random() * 30)}</p>
}

export default person;