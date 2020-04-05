import React from "react";
import {serviceProfiler} from "../provider/serviceProfile";

class Search extends React.Component {
    state = {
        userInput: ''
    };
    
    handlerSubmit = async (e) => {
        const uriProfile = `https://api.github.com/users/${this.state.userInput}`;
        e.preventDefault();
        try {
            const aProfile = await serviceProfiler(uriProfile);
            this.props.submitProfile(aProfile.data);
            this.setState({userInput: ''})
            
        } catch (e) {
            throw e;
        }
    };
    
    handlerInput = (e) => this.setState({userInput: e.target.value});
    
    render () {
        const {userInput} = this.state;
        return (
            <>
                <form action="" onSubmit={this.handlerSubmit}>
                    <input
                        className="input-profile"
                        placeholder="Enter your Github's pseudo"
                        type="text"
                        value={userInput}
                        onChange={this.handlerInput}
                        required/>
                    <button className="btn-profile">Add User</button>
                </form>
            </>
        );
    }
}

export default Search;
