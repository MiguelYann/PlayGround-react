import React, {Component} from "react";

class CharComponent extends Component {
    
    render () {
        const styleChart = {
            padding: '16px',
            display: 'inline-block',
            textAlign: 'center',
            margin: '16px',
            border: '1px solid black'
        };
    
        return (
            <div onClick={this.props.deleteChar} style={{...styleChart}}>
                <p>{this.props.charEnter}</p>
            </div>
        );
    }
}

export default CharComponent;
