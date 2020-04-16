import React from 'react';
import * as PropTypes from 'prop-types';

export default function Timer(props) {
  const styleTimer = {
    fontSize: '40px',
    color: 'red',
  };
  const { time } = props;
  return <pre style={{ ...styleTimer }}>{time}</pre>;
}

Timer.propTypes = {
  time: PropTypes.number.isRequired,
};
