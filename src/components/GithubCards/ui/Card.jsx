import React from 'react';
import '../styles/GithubCard.css';
import {MdDeleteForever} from "react-icons/md";

class Card extends React.Component {
    
    render () {
        const styleIconButton = {
            width: '30px',
            height: '5%',
            color: 'red'
        };
        return (
            <div className="github-profile">
                <img src={this.props.urlPicture} alt="profile-image"/>
                <div className="info">
                    <div className="name">{this.props.name}</div>
                    <div className="Company">{this.props.company}</div>
                </div>
                <MdDeleteForever onClick={this.props.handlerDelete} style={{...styleIconButton}}/>
            </div>
        );
    }
}


Card.defaultProps = {
    company: ''
};

export default Card;
