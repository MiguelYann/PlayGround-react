import React, {useState} from "react";

const CounterHooks = props => {
    
    const [counterState, setCounter] = useState(0);
    const [title, setTitle] = useState('My counter update');
    
    const countHandler = () => {
        setCounter(counterState + 1);
        console.log(counterState)
    };
    
    return (
        <>
            <p>{title}</p>
            <h5>{counterState}</h5>
            <button onClick={countHandler}>Update counter</button>
        </>
    );
};
export default CounterHooks;
