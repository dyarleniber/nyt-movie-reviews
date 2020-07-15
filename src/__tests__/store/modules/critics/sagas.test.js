import { runSaga } from 'redux-saga';

import GetCriticsService from '../../../../services/GetCriticsService';
import { searchCritics } from '../../../../store/modules/critics/sagas';
import {
  searchCriticsSuccess,
  searchCriticsFailure,
} from '../../../../store/modules/critics/actions';

describe('critics sagas', () => {
  it('should load critics in case of success', async () => {
    const dispatchedActions = [];

    const critics = [
      {
        display_name: 'name',
        bio: 'description',
        multimedia: { resource: { src: '#' } },
      },
    ];

    const response = { success: true, data: critics };
    GetCriticsService.constructor.run = jest.fn(() =>
      Promise.resolve(response)
    );

    const store = { dispatch: action => dispatchedActions.push(action) };
    await runSaga(store, searchCritics).toPromise();

    expect(GetCriticsService.constructor.run.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(searchCriticsSuccess(critics));
  });

  it('should handle critics load errors in case of API response failure', async () => {
    const dispatchedActions = [];

    const response = { success: false };
    GetCriticsService.constructor.run = jest.fn(() =>
      Promise.resolve(response)
    );

    const store = { dispatch: action => dispatchedActions.push(action) };
    await runSaga(store, searchCritics).toPromise();

    expect(GetCriticsService.constructor.run.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(searchCriticsFailure());
  });

  it('should handle critics load errors in case of failure', async () => {
    const dispatchedActions = [];

    GetCriticsService.constructor.run = jest.fn(() => Promise.reject());

    const store = { dispatch: action => dispatchedActions.push(action) };
    await runSaga(store, searchCritics).toPromise();

    expect(GetCriticsService.constructor.run.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(searchCriticsFailure());
  });
});
