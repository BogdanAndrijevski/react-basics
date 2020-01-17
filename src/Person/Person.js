import React from 'react';
// import './Person.css';
import styled from 'styled-components';

const person = (props) => {

    const StyledDiv = styled.div`
    
    width: 60%;
    margin: 16px auto;
    border: 1px solid #b3ff00;
    box-shadow: 0 2px 3px #6d9c00;
    padding: 16px;
    text-align: center;
    background-color: black;

    @media (min-width: 500px){
            width: 70%;
            background-color: red;
    }
    `;

    const style = {
        '@media (min-width: 500px)': {
            width: '70%',
            backgroundColor: 'red'
        }
    }
    return (
        // <div className='Person'  style={style}>
        <StyledDiv>
            <p onClick={props.click}>I am {props.name}, I am {props.age} years old and my lucky number is {Math.floor(Math.random() * 30)}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </StyledDiv>
    )
}

export default person;