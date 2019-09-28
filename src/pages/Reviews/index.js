import React from 'react';

import { Container, Filter } from './styles';

export default function Reviews() {
  return (
    <Container>
      <Filter>
        Filters - <button type="button"> Search </button>
      </Filter>
      Reviews
    </Container>
  );
}
