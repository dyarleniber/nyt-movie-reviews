import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  favoritesList: [],
};

export default function favorites(state = INITIAL_STATE, action) {
  return produce(state, draftState => {
    const draft = draftState;

    switch (action.type) {
      case '@favorites/ADD_REQUEST': {
        draft.loading = true;

        break;
      }
      case '@favorites/ADD_SUCCESS': {
        draft.loading = false;

        const { review } = action.payload;

        draft.favoritesList.push(review);

        break;
      }
      case '@favorites/ADD_FAILURE': {
        draft.loading = false;

        break;
      }
      case '@favorites/REMOVE': {
        const { id } = action.payload;

        const index = draft.favoritesList.findIndex(
          element => element.id === id
        );

        if (index >= 0) {
          draft.favoritesList.splice(index, 1);
        }

        break;
      }
      default:
    }
  });
}
