import React from 'react';

import { Container } from './styles';

import loadingGif from '../../assets/images/loading.gif';

export default function PageLoading() {
  return (
    <Container>
      <img src={loadingGif} alt="LoadingGif" />
    </Container>
  );
}
