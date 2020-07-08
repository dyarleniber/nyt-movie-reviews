import { toast } from 'react-toastify';
import { takeLatest, put, all } from 'redux-saga/effects';

import GetReviewsService from '../../../services/GetReviewsService';
import { searchReviewsSuccess, searchReviewsFailure } from './actions';

export function* searchReviews({ payload }) {
  try {
    const response = yield GetReviewsService.constructor.run({
      ...payload.filters,
    });

    if (response.success) {
      const reviews = response.data;

      yield put(searchReviewsSuccess(reviews));
    } else {
      toast.error('Failed to load data. Please, try again later.');

      yield put(searchReviewsFailure());
    }
  } catch (err) {
    toast.error('Failed to load data. Please, try again later.');

    yield put(searchReviewsFailure());
  }
}

export default all([takeLatest('@reviews/SEARCH_REQUEST', searchReviews)]);
