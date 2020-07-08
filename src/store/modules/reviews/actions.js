export function searchReviewsRequest(filters) {
  return {
    type: '@reviews/SEARCH_REQUEST',
    payload: { filters },
  };
}

export function searchReviewsSuccess(reviews) {
  return {
    type: '@reviews/SEARCH_SUCCESS',
    payload: { reviews },
  };
}

export function searchReviewsFailure() {
  return {
    type: '@reviews/SEARCH_FAILURE',
  };
}
