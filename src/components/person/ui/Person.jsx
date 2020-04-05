import React from "react";
import styled from 'styled-components';

const StyledDiv = styled.div`
    border-style: solid;
    border-width: 1px;
    border-color: #cccccc;
    margin: 50px auto;
    box-shadow: 0 2px 3px;
    padding: 15px;
    width: 50%;
    text-align: center;
`;

const StyledParagraph = styled.p`
    color: red;
    font-weight: bold;
`;

const Person = (props) => {
    return (
        <StyledDiv>
            <h3 onClick={props.deleting}> I 'm {props.name} and have {props.age} years old</h3>
            <input
                type="text"
                onChange={props.nameHandler}
                value={props.valueName}
            />
            <StyledParagraph>Paragraph</StyledParagraph>
        </StyledDiv>
    );
};

export default Person;

