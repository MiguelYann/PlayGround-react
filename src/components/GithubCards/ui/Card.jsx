import React from 'react';
import '../styles/GithubCard.css';
import * as PropTypes from 'prop-types';

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

Card.propTypes = {
    urlPicture: PropTypes.string,
    name: PropTypes.string.isRequired,
    company: PropTypes.string
};

export default Card;
