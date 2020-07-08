const INITIAL_STATE = {
  loading: false,
  reviews: [],
};

export default function reviews(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@reviews/SEARCH_REQUEST': {
      return { ...state, loading: true };
    }
    case '@reviews/SEARCH_SUCCESS': {
      return { ...state, loading: false, reviews: action.payload.reviews };
    }
    case '@reviews/SEARCH_FAILURE': {
      return { ...state, loading: false };
    }
    default:
      return state;
  }
}
