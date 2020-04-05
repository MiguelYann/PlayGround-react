import React from "react";
import * as PropTypes from 'prop-types';
import CardList from "./CardList";

export function App (props) {
    const fontFamily = 'Jetbrains Mono';
    const styleText = {
        fontFamily,
        width: '50%',
        margin: '50px 50%',
        color: 'brown'
    };
    
    return (
        <div>
            <h2 style={{...styleText}}>{props.appTitle}</h2>
            <div style={{display: 'grid'}}>
                <CardList/>
            </div>
        </div>
    );
}

App.propTypes = {
    appTitle: PropTypes.string
};


