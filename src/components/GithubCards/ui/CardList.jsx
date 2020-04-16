import * as PropTypes from 'prop-types';

import React from 'react';
import Card from './Card';

const CardList = (props) => {
  const { profiles, deleteItem } = props;
  return (
    <div style={{ display: 'block' }}>
      {profiles.map((profile) => (
        <Card
          handlerDelete={() => deleteItem(profile)}
          name={profile.name}
          key={profile.id}
          company={profile.company}
          urlPicture={profile.avatar_url}
        />
      ))}
    </div>
  );
};

CardList.propTypes = {
  profiles: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default CardList;
