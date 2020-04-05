import React from "react";

export function Display ({messageDisplay}) {
    const styleDisplay = {
        margin: '10% 10%',
    };
    
    const styleText = {
        fontFamily: 'Jetbrains Mono',
        fontSize: '30px',
        color: 'blue'
    };
    return (
        <div style={{...styleDisplay}}>
            <p style={{...styleText}}>{messageDisplay}</p>
        </div>
    );
}


