import React from "react";
import * as PropTypes from "prop-types";

export function Timer (props) {
    const styleTimer = {
        fontSize: '40px',
        color: 'red'
    };
    const {time} = props;
    return (
        <pre style={{...styleTimer}}>{time}</pre>
    );
}

Timer.propTypes = {time: PropTypes.any};

