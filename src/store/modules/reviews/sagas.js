import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';
import apiConfig from '../../../config/api';

import { reviewsSuccess, reviewsFailure } from './actions';

export function* searchReviews({ payload }) {
  const { order, query, reviewer, criticsPick } = payload;

  try {
    const response = yield call(
      api.get,
      `reviews/search.json?critics-pick=${
        criticsPick ? 'Y' : ''
      }&order=${order}&query=${query}&reviewer=${reviewer}&api-key=${
        apiConfig.key
      }`
    );

    yield put(reviewsSuccess(response.data));
  } catch (err) {
    yield put(reviewsFailure());
  }
}

export default all([takeLatest('@reviews/REVIEWS_REQUEST', searchReviews)]);
