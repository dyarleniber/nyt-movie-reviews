const INITIAL_STATE = {
  loading: false,
  critics: [],
};

export default function critics(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@critics/SEARCH_REQUEST': {
      return { ...state, loading: true };
    }
    case '@critics/SEARCH_SUCCESS': {
      return { ...state, loading: false, critics: action.payload.critics };
    }
    case '@critics/SEARCH_FAILURE': {
      return { ...state, loading: false };
    }
    default:
      return state;
  }
}
