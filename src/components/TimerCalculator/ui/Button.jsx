import React from "react";

export function Button ({increment, handleClick}) {
    const buttonStyles = {
        width: '200px',
        height: '100px',
        backgroundColor: 'blue',
        borderRadius: '20px',
        fontFamily: 'Jetbrains Mono',
        fontWeight: 'bold',
        fontSize: '50px',
        color: 'white'
        
    };
    return (
        <div>
            <button style={{...buttonStyles}} onClick={() => handleClick(increment)}>+{increment}</button>
        </div>
    );
}

