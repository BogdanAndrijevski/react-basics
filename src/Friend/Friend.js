import React from 'react';

const friend = (props) => {
    return (
        <div>
            <h4 onClick={props.click}>I am {props.name}, I am {props.age} years old</h4>
            <h4>My lucky number is {Math.floor(Math.random() * 30)}</h4>
            <h4>{props.children}</h4>
        </div>
    )
}

export default friend;