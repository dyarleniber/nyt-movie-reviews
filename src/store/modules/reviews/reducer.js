const INITIAL_STATE = {
  initialLoading: false,
  loadingMore: false,
  searchCounter: 0,
  filters: {},
  reviews: [],
  hasMore: false,
  hasError: false,
};

export default function reviews(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@reviews/SEARCH_REQUEST': {
      return {
        ...state,
        initialLoading: true,
        loadingMore: false,
        searchCounter: 0,
        filters: action.payload.filters,
        reviews: [],
        hasMore: false,
      };
    }
    case '@reviews/SEARCH_SUCCESS': {
      return {
        ...state,
        initialLoading: false,
        searchCounter: state.searchCounter + 1,
        reviews: action.payload.reviews,
        hasMore: action.payload.hasMore,
        hasError: false,
      };
    }
    case '@reviews/SEARCH_FAILURE': {
      return {
        ...state,
        initialLoading: false,
        hasError: true,
      };
    }
    case '@reviews/SEARCH_MORE_REQUEST': {
      return {
        ...state,
        loadingMore: true,
      };
    }
    case '@reviews/SEARCH_MORE_SUCCESS': {
      return {
        ...state,
        loadingMore: false,
        searchCounter: state.searchCounter + 1,
        reviews: [...state.reviews, ...action.payload.reviews],
        hasMore: action.payload.hasMore,
        hasError: false,
      };
    }
    case '@reviews/SEARCH_MORE_FAILURE': {
      return {
        ...state,
        loadingMore: false,
        hasError: true,
      };
    }
    default:
      return state;
  }
}
