import React from 'react';

import { Container, Content, DotWrapper, Dot } from './styles';

export default function LoadingDots() {
  return (
    <Container>
      <Content>
        <DotWrapper>
          <Dot delay="0s" />
          <Dot delay=".1s" />
          <Dot delay=".2s" />
        </DotWrapper>
      </Content>
    </Container>
  );
}
