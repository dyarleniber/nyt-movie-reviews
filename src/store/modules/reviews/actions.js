export function searchReviewsRequest(filters) {
  return {
    type: '@reviews/SEARCH_REQUEST',
    payload: { filters },
  };
}

export function searchReviewsSuccess(reviews, hasMore) {
  return {
    type: '@reviews/SEARCH_SUCCESS',
    payload: { reviews, hasMore },
  };
}

export function searchReviewsFailure() {
  return {
    type: '@reviews/SEARCH_FAILURE',
  };
}

export function searchMoreReviewsRequest() {
  return {
    type: '@reviews/SEARCH_MORE_REQUEST',
  };
}

export function searchMoreReviewsSuccess(reviews, hasMore) {
  return {
    type: '@reviews/SEARCH_MORE_SUCCESS',
    payload: { reviews, hasMore },
  };
}

export function searchMoreReviewsFailure() {
  return {
    type: '@reviews/SEARCH_MORE_FAILURE',
  };
}
