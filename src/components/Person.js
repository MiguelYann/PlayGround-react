import React from "react";
import './Person.css'

const Person = (props) => {
    return (
        <div className="Person">
            <h3 onClick={props.deleting}>I'm {props.name} and have {props.age} years old</h3>
            <input type="text" onChange={props.nameHandler} value={props.valueName}/>
        </div>
    );
};

export default Person;

