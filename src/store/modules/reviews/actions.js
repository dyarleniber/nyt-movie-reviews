export function reviewsRequest({ order, query, reviewer, criticsPick }) {
  return {
    type: '@reviews/REVIEWS_REQUEST',
    payload: { order, query, reviewer, criticsPick },
  };
}

export function reviewsSuccess(result) {
  return {
    type: '@reviews/REVIEWS_SUCCESS',
    payload: { result },
  };
}

export function reviewsFailure() {
  return {
    type: '@reviews/REVIEWS_FAILURE',
  };
}
