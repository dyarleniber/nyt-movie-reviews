import * as actions from '../../../../store/modules/reviews/actions';

describe('reviews actions', () => {
  it('should create an action to request reviews', () => {
    const filters = {
      order: 'by-title',
      query: 'title',
      reviewer: 'criticName',
      criticsPick: true,
    };
    const expectedAction = {
      type: '@reviews/SEARCH_REQUEST',
      payload: { filters },
    };
    expect(actions.searchReviewsRequest(filters)).toEqual(expectedAction);
  });

  it('should create an action to success reviews', () => {
    const reviews = [];
    const hasMore = false;
    const expectedAction = {
      type: '@reviews/SEARCH_SUCCESS',
      payload: { reviews, hasMore },
    };
    expect(actions.searchReviewsSuccess(reviews, hasMore)).toEqual(
      expectedAction
    );
  });

  it('should create an action to failure reviews', () => {
    const expectedAction = {
      type: '@reviews/SEARCH_FAILURE',
    };
    expect(actions.searchReviewsFailure()).toEqual(expectedAction);
  });

  it('should create an action to request more reviews', () => {
    const expectedAction = {
      type: '@reviews/SEARCH_MORE_REQUEST',
    };
    expect(actions.searchMoreReviewsRequest()).toEqual(expectedAction);
  });

  it('should create an action to success more reviews', () => {
    const reviews = [];
    const hasMore = false;
    const expectedAction = {
      type: '@reviews/SEARCH_MORE_SUCCESS',
      payload: { reviews, hasMore },
    };
    expect(actions.searchMoreReviewsSuccess(reviews, hasMore)).toEqual(
      expectedAction
    );
  });

  it('should create an action to failure more reviews', () => {
    const expectedAction = {
      type: '@reviews/SEARCH_MORE_FAILURE',
    };
    expect(actions.searchMoreReviewsFailure()).toEqual(expectedAction);
  });
});
