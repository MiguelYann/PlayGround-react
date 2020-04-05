import React, {useState} from "react";

const CounterHooks = props => {
    
    const [counterState, setCounter] = useState(0);
    const [title, setTitle] = useState('My counter update');
    const styleText = {
        color: counterState % 2 === 0 ? 'green' : 'red'
    };
    
    const countHandler = () => {
        setCounter(counterState + 1);
        console.log(counterState)
    };
    
    return (
        <>
            <p>{title}</p>
            <h5 style={{...styleText}}>{counterState}</h5>
            <button onClick={countHandler}>Update counter</button>
        </>
    );
};
export default CounterHooks;
