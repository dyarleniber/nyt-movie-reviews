import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Critic = ({ match }) => {
  const criticName = decodeURIComponent(match.params.name);

  return <Container>{`Critic ${criticName}`}</Container>;
};

Critic.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default Critic;
