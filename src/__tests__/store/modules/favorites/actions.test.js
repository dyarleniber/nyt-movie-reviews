import * as actions from '../../../../store/modules/favorites/actions';

describe('favorites actions', () => {
  it('should create an action to add favorites', () => {
    const review = {};
    const expectedAction = {
      type: '@favorites/ADD',
      payload: { review },
    };
    expect(actions.addToFavorites(review)).toEqual(expectedAction);
  });

  it('should create an action to remove favorites', () => {
    const title = 'title';
    const criticName = 'criticName';
    const expectedAction = {
      type: '@favorites/REMOVE',
      payload: { title, criticName },
    };
    expect(actions.removeFromFavorites(title, criticName)).toEqual(
      expectedAction
    );
  });
});
