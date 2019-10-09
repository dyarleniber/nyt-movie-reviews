export function addToFavoritesRequest(query, reviewer) {
  return {
    type: '@favorites/ADD_REQUEST',
    payload: { query, reviewer },
  };
}

export function addToFavoritesSuccess(review) {
  return {
    type: '@favorites/ADD_SUCCESS',
    payload: { review },
  };
}

export function addToFavoritesFailure() {
  return {
    type: '@favorites/ADD_FAILURE',
  };
}

export function removeFromFavorites(reviewTitle, criticName) {
  return {
    type: '@favorites/REMOVE',
    payload: { reviewTitle, criticName },
  };
}
