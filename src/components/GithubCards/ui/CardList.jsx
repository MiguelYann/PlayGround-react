import React from "react";
import Card from "./Card";
import * as PropTypes from 'prop-types';

const CardList = props => {
    return (
        <div style={{display: 'block'}}>
            {props.profiles.map(profile => <Card
                name={profile.name}
                key={profile.id}
                company={profile.company}
                urlPicture={profile.avatar_url}/>
            )}
        </div>
    );
};

CardList.propTypes = {
    profiles: PropTypes.array.isRequired
};

export default CardList;
