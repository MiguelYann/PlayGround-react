import React, {useState} from "react";
import {Button} from "./Button";
import {Display} from "./Display";
import {Timer} from "./Timer";

export function App () {
    const styleTitle = {
        margin: '5% 25%',
        fontSize: '60px',
        fontFamily: 'Jetbrains Mono'
    };
    const title = <h2 style={{...styleTitle}}>Increment Number</h2>;
    const [getIncrement, setIncrement] = useState(0);
    const currentDate = new Date();
    const styles = {
        margin: '10% 50%',
        width: '50%'
    };
    
    const updateIncrement = (i) => setIncrement(getIncrement + i);
    return (
        <>
            {title}
            <div style={{...styles}}>
                <Button increment={1} handleClick={updateIncrement}/>
                <Display messageDisplay={getIncrement}/>
                <Timer time={currentDate.toLocaleTimeString()}/>
            </div>
        </>
    );
}

