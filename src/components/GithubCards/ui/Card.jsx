import React from 'react';
import '../styles/GithubCard.css';
import { MdDeleteForever } from 'react-icons/md';
import * as PropTypes from 'prop-types';

const Card = (props) => {
  const { urlPicture, name, company, handlerDelete } = props;
  const styleIconButton = {
    width: '30px',
    height: '5%',
    color: 'red',
  };

  return (
    <div className="github-profile">
      <img src={urlPicture} alt="imageGithub" />
      <div className="info">
        <div className="name">{name}</div>
        <div className="Company">{company}</div>
      </div>
      <MdDeleteForever onClick={handlerDelete} style={{ ...styleIconButton }} />
    </div>
  );
};

Card.propTypes = {
  company: PropTypes.string.isRequired,
  urlPicture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handlerDelete: PropTypes.func.isRequired,
};

export default Card;
