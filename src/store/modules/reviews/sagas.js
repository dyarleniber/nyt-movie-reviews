import { toast } from 'react-toastify';
import { takeLeading, put, all, select } from 'redux-saga/effects';

import GetReviewsService from '../../../services/GetReviewsService';
import {
  searchReviewsSuccess,
  searchReviewsFailure,
  searchMoreReviewsSuccess,
  searchMoreReviewsFailure,
} from './actions';
import apiConfig from '../../../config/api';

export function* searchReviews({ payload }) {
  try {
    const response = yield GetReviewsService.constructor.run({
      ...payload.filters,
      offset: 0,
    });

    if (response.success) {
      const { data: reviews, hasMore } = response;

      yield put(searchReviewsSuccess(reviews, hasMore));
    } else {
      toast.error('Failed to load data. Please, try again later.');

      yield put(searchReviewsFailure());
    }
  } catch (err) {
    toast.error('Failed to load data. Please, try again later.');

    yield put(searchReviewsFailure());
  }
}

export function* searchMoreReviews() {
  try {
    const searchCounter = yield select(state => state.reviews.searchCounter);

    const filters = yield select(state => state.reviews.filters);

    const offset = searchCounter * apiConfig.offsetMultiple;

    const response = yield GetReviewsService.constructor.run({
      ...filters,
      offset,
    });

    if (response.success) {
      const { data: reviews, hasMore } = response;

      yield put(searchMoreReviewsSuccess(reviews, hasMore));
    } else {
      toast.error('Failed to load data. Please, try again later.');

      yield put(searchMoreReviewsFailure());
    }
  } catch (err) {
    toast.error('Failed to load data. Please, try again later.');

    yield put(searchMoreReviewsFailure());
  }
}

export default all([
  takeLeading('@reviews/SEARCH_REQUEST', searchReviews),
  takeLeading('@reviews/SEARCH_MORE_REQUEST', searchMoreReviews),
]);
