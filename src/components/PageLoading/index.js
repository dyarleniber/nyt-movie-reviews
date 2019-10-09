import React from 'react';

import { Container, Content } from './styles';

import loadingGif from '../../assets/images/loading.gif';

export default function PageLoading() {
  return (
    <Container>
      <Content>
        <img src={loadingGif} alt="LoadingGif" />
      </Content>
    </Container>
  );
}
