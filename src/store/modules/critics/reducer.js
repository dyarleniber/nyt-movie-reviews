import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  list: [],
};

export default function critics(state = INITIAL_STATE, action) {
  return produce(state, draftState => {
    const draft = draftState;

    switch (action.type) {
      case '@critics/CRITICS_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@critics/CRITICS_SUCCESS': {
        draft.loading = false;
        draft.list = action.payload.result;
        break;
      }
      case '@critics/CRITICS_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
