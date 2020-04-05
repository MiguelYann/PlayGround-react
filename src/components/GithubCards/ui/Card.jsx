import React from 'react';
import '../styles/GithubCard.css';

class Card extends React.Component {
    
    render () {
        return (
            <div className="github-profile">
                <img src={this.props.urlPicture} alt="profile-image"/>
                <div className="info">
                    <div className="name">{this.props.name}</div>
                    <div className="Company">{this.props.company}</div>
                </div>
            </div>
        );
    }
}


Card.defaultProps = {
    company: ''
};

export default Card;
