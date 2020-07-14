import * as actions from '../../../../store/modules/critics/actions';

describe('critics actions', () => {
  it('should create an action to request critics', () => {
    const expectedAction = {
      type: '@critics/SEARCH_REQUEST',
    };
    expect(actions.searchCriticsRequest()).toEqual(expectedAction);
  });

  it('should create an action to success critics', () => {
    const critics = [];
    const expectedAction = {
      type: '@critics/SEARCH_SUCCESS',
      payload: { critics },
    };
    expect(actions.searchCriticsSuccess(critics)).toEqual(expectedAction);
  });

  it('should create an action to failure critics', () => {
    const expectedAction = {
      type: '@critics/SEARCH_FAILURE',
    };
    expect(actions.searchCriticsFailure()).toEqual(expectedAction);
  });
});
