import React from 'react';
import * as PropTypes from 'prop-types';

export default function Button({ increment, handleClick }) {
  const buttonStyles = {
    width: '200px',
    height: '100px',
    backgroundColor: 'blue',
    borderRadius: '20px',
    fontFamily: 'Jetbrains Mono',
    fontWeight: 'bold',
    fontSize: '50px',
    color: 'white',
  };
  return (
    <div>
      <button type="button" style={{ ...buttonStyles }} onClick={() => handleClick(increment)}>
        +{increment}
      </button>
    </div>
  );
}

Button.propTypes = {
  increment: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};
