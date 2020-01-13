import React from 'react';
import './Human.css';

const human = (props) => {
    return (
        <div className={'Human'}>
            <p onClick={props.click}>I am {props.name}, I am {props.age} years old and my lucky number is {Math.floor(Math.random() * 30)}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default human;