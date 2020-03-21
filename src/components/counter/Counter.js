import React, {Component} from "react";

class Counter extends Component {
    state = {
        counter: 0
    };
    
    counterHandler = () => {
        this.setState({counter: this.state.counter + 1})
        console.log(this.state.counter);
    };
    
    render () {
        return (
            <>
                <h4>{this.state.counter}</h4>
                <button onClick={this.counterHandler}>Increase counter</button>
            </>
        )
    }
}

export default Counter;
