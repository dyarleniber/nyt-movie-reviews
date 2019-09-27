import React from 'react';
import PropTypes from 'prop-types';

const Critic = ({ match }) => {
  const criticName = decodeURIComponent(match.params.name);

  return <h1>{`Critic ${criticName}`}</h1>;
};

Critic.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default Critic;
