import { runSaga } from 'redux-saga';

import GetReviewsService from '../../../../services/GetReviewsService';
import {
  searchReviews,
  searchMoreReviews,
} from '../../../../store/modules/reviews/sagas';
import {
  searchReviewsSuccess,
  searchReviewsFailure,
  searchMoreReviewsSuccess,
  searchMoreReviewsFailure,
} from '../../../../store/modules/reviews/actions';
import apiConfig from '../../../../config/api';

describe('reviews sagas', () => {
  it('should load reviews in case of success', async () => {
    const dispatchedActions = [];

    const reviews = [
      {
        display_title: 'title',
        summary_short: 'description',
        publication_date: '01-01-2020',
        multimedia: { src: '#' },
        link: { url: '#' },
        byline: 'criticName',
        critics_pick: 1,
      },
    ];
    const hasMore = true;

    const response = { success: true, data: reviews, hasMore };
    GetReviewsService.constructor.run = jest.fn(() =>
      Promise.resolve(response)
    );

    const store = { dispatch: action => dispatchedActions.push(action) };
    const params = { payload: { filters: {} } };
    await runSaga(store, searchReviews, params).toPromise();

    expect(GetReviewsService.constructor.run.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(
      searchReviewsSuccess(reviews, hasMore)
    );
  });

  it('should handle reviews load errors in case of API response failure', async () => {
    const dispatchedActions = [];

    const response = { success: false };
    GetReviewsService.constructor.run = jest.fn(() =>
      Promise.resolve(response)
    );

    const store = { dispatch: action => dispatchedActions.push(action) };
    const params = { payload: { filters: {} } };
    await runSaga(store, searchReviews, params).toPromise();

    expect(GetReviewsService.constructor.run.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(searchReviewsFailure());
  });

  it('should handle reviews load errors in case of failure', async () => {
    const dispatchedActions = [];

    GetReviewsService.constructor.run = jest.fn(() => Promise.reject());

    const store = { dispatch: action => dispatchedActions.push(action) };
    const params = { payload: { filters: {} } };
    await runSaga(store, searchReviews, params).toPromise();

    expect(GetReviewsService.constructor.run.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(searchReviewsFailure());
  });

  it('should load more reviews in case of success', async () => {
    const dispatchedActions = [];

    const state = {
      reviews: {
        searchCounter: 0,
        filters: {
          order: '',
          query: '',
          reviewer: '',
          criticsPick: '',
        },
      },
    };

    const reviews = [
      {
        display_title: 'title',
        summary_short: 'description',
        publication_date: '01-01-2020',
        multimedia: { src: '#' },
        link: { url: '#' },
        byline: 'criticName',
        critics_pick: 1,
      },
    ];
    const hasMore = true;

    const response = { success: true, data: reviews, hasMore };
    GetReviewsService.constructor.run = jest.fn(() =>
      Promise.resolve(response)
    );

    const store = {
      dispatch: action => dispatchedActions.push(action),
      getState: () => ({ ...state }),
    };
    await runSaga(store, searchMoreReviews).toPromise();

    const { filters } = state.reviews;
    const offset = state.reviews.searchCounter * apiConfig.offsetMultiple;
    expect(GetReviewsService.constructor.run).toHaveBeenCalledTimes(1);
    expect(GetReviewsService.constructor.run).toHaveBeenCalledWith({
      ...filters,
      offset,
    });

    expect(dispatchedActions).toContainEqual(
      searchMoreReviewsSuccess(reviews, hasMore)
    );
  });

  it('should handle more reviews load errors in case of API response failure', async () => {
    const dispatchedActions = [];

    const state = {
      reviews: {
        searchCounter: 0,
        filters: {
          order: '',
          query: '',
          reviewer: '',
          criticsPick: '',
        },
      },
    };

    const response = { success: false };
    GetReviewsService.constructor.run = jest.fn(() =>
      Promise.resolve(response)
    );

    const store = {
      dispatch: action => dispatchedActions.push(action),
      getState: () => ({ ...state }),
    };
    await runSaga(store, searchMoreReviews).toPromise();

    expect(GetReviewsService.constructor.run).toHaveBeenCalledTimes(1);
    expect(dispatchedActions).toContainEqual(searchMoreReviewsFailure());
  });

  it('should handle more reviews load errors in case of failure', async () => {
    const dispatchedActions = [];

    const state = {
      reviews: {
        searchCounter: 0,
        filters: {
          order: '',
          query: '',
          reviewer: '',
          criticsPick: '',
        },
      },
    };

    GetReviewsService.constructor.run = jest.fn(() => Promise.reject());

    const store = {
      dispatch: action => dispatchedActions.push(action),
      getState: () => ({ ...state }),
    };
    await runSaga(store, searchMoreReviews).toPromise();

    expect(GetReviewsService.constructor.run).toHaveBeenCalledTimes(1);
    expect(dispatchedActions).toContainEqual(searchMoreReviewsFailure());
  });
});
