import React from 'react';
import { useSelector } from 'react-redux';

import PageLoading from '../../components/PageLoading';
import NotFound from '../../components/NotFound';
import Review from '../../components/Review';

import { Container } from './styles';

import emptyImageLogo from '../../assets/images/empty-image.svg';

export default function Reviews() {
  const favorites = useSelector(state => state.favorites.favorites);
  const loading = useSelector(state => state.favorites.loading);

  if (loading) {
    return <PageLoading />;
  }

  return (
    <>
      {!favorites.length ? (
        <NotFound Message="No records found" />
      ) : (
        <Container>
          {favorites.map(favorite => {
            return (
              <Review
                key={favorite.reviewTitle}
                ReviewTitle={favorite.reviewTitle}
                ReviewDescription={favorite.reviewDescription}
                ReviewDate={new Date(favorite.reviewDate)}
                ReviewImage={favorite.reviewImage || emptyImageLogo}
                ReviewUrl={favorite.reviewUrl}
                CriticName={favorite.criticName}
                CriticsPick={!!favorite.criticsPick}
              />
            );
          })}
        </Container>
      )}
    </>
  );
}
