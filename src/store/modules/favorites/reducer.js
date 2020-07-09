const INITIAL_STATE = [];

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@favorites/ADD': {
      return [...state, action.payload.review];
    }
    case '@favorites/REMOVE': {
      return state.filter(
        favorite =>
          favorite.display_title !== action.payload.title ||
          favorite.byline !== action.payload.criticName
      );
    }
    default:
      return state;
  }
}
