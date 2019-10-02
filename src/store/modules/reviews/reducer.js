import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  list: [],
};

export default function reviews(state = INITIAL_STATE, action) {
  return produce(state, draftState => {
    const draft = draftState;

    switch (action.type) {
      case '@reviews/REVIEWS_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@reviews/REVIEWS_SUCCESS': {
        draft.loading = false;
        draft.list = action.payload.result;
        break;
      }
      case '@reviews/REVIEWS_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
