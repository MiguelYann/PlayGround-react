import React from "react";

function Validation (props) {
    
    let displayText = '';
    
    if (props.sizeText < 5) {
        displayText = "Text Too short"
    } else {
        displayText = "Too long";
    }
    return (
        <p>{displayText}</p>
    );
}

export default Validation;
