import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content } from './styles';

const NotFound = ({ Code, Message }) => {
  return (
    <Container>
      <Content>
        <strong>{Code}</strong>
        <span>{Message}</span>
      </Content>
    </Container>
  );
};

NotFound.propTypes = {
  Code: PropTypes.number,
  Message: PropTypes.string.isRequired,
};

NotFound.defaultProps = {
  Code: null,
};

export default NotFound;
