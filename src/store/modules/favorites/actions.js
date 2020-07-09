export function addToFavorites(review) {
  return {
    type: '@favorites/ADD',
    payload: { review },
  };
}

export function removeFromFavorites(title, criticName) {
  return {
    type: '@favorites/REMOVE',
    payload: { title, criticName },
  };
}
