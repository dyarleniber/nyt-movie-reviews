import React from 'react';

import { Container, Content } from './styles';
import Loading from '../Loading';

export default function PageLoading() {
  return (
    <Container>
      <Content>
        <Loading />
      </Content>
    </Container>
  );
}
