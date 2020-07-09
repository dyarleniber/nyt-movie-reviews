import React from 'react';
import { useSelector } from 'react-redux';

import NotFound from '../../components/NotFound';
import Review from '../../components/Review';
import { Container } from './styles';

export default function Reviews() {
  const favorites = useSelector(state => state.favorites);

  return (
    <>
      {!favorites.length ? (
        <NotFound Message="No records found" />
      ) : (
        <Container>
          {favorites.map(favorite => {
            return (
              <Review
                key={`${favorite.display_title}-${favorite.byline}`}
                rawData={favorite}
              />
            );
          })}
        </Container>
      )}
    </>
  );
}
