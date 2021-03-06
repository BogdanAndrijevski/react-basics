import React from 'react';
// import './Friend.css';
import classes from './Friend.css';


const friend = (props) => {
    return (
        // <div className={'Friend'}>
        <div className={classes.Friend}>
            <p onClick={props.click}>I am {props.name}, I am {props.age} years old</p>
            <p>My lucky number is {Math.floor(Math.random() * 30)}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default friend;