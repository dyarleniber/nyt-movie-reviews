import React from 'react';

import { LoadingWrapper, DotWrapper, Dot } from './styles';

export default function PageLoading() {
  return (
    <LoadingWrapper>
      <DotWrapper>
        <Dot delay="0s" />
        <Dot delay=".1s" />
        <Dot delay=".2s" />
      </DotWrapper>
    </LoadingWrapper>
  );
}
