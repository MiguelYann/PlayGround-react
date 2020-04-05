import React from "react";
import Card from "./Card";
import fakeData from "./fakeData";

const CardList = props => {
    return (
        <div style={{display: 'block'}}>
            {fakeData.map(profile => <Card {...profile}/>)}
        </div>
    );
};

export default CardList;
