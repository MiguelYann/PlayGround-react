import React from 'react';
import '../styles/GithubCard.css';

class Card extends React.Component {
    
    render () {
        return (
            <div className="github-profile">
                <img src="https://placehold.it/75" alt="profile-image"/>
                <div className="info">
                    <div className="name">Miguel</div>
                    <div className="Company">Oui.SNCF</div>
                </div>
            </div>
        );
    }
}

export default Card;
