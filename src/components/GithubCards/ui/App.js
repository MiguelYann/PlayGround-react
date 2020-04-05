import React from "react";
import * as PropTypes from 'prop-types';
import CardList from "./CardList";
import Search from "./Search";

export class App extends React.Component {
    
    state = {
        profiles: []
    };
    
    removeProfile = (aProfile) => {
        const profilesClone = [...this.state.profiles];
        const indexToDelete = profilesClone.findIndex(profile => profile.name === aProfile.name);
        profilesClone.splice(indexToDelete, 1);
        this.setState({profiles: profilesClone});
    };
    
    addProfile = (profile) => {
        this.setState(prevState => {
            if (!prevState.profiles.length) {
                return ( {profiles: [...prevState.profiles, profile]} )
            }
            const excludeProfiles = prevState.profiles.filter(currentProfile => currentProfile.id === profile.id);
            
            return ( {profiles: !excludeProfiles.length ? [...prevState.profiles, profile] : [...prevState.profiles]} )
        });
    };
    
    render () {
        const fontFamily = 'Jetbrains Mono';
        const styleText = {
            fontFamily,
            width: '50%',
            margin: '50px 50%',
            color: 'black'
        };
        
        return (
            <div>
                <h2 style={{...styleText}}>{this.props.appTitle}</h2>
                <div style={{display: 'grid'}}>
                    <Search submitProfile={this.addProfile}/>
                    <CardList {...this.state} deleteItem={this.removeProfile}/>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    appTitle: PropTypes.string
};


