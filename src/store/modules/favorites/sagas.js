import bcrypt from 'bcryptjs';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';
import apiConfig from '../../../config/api';

import { addToFavoritesSuccess, addToFavoritesFailure } from './actions';

export function* addToFavorites({ payload }) {
  const { query, reviewer } = payload;

  try {
    const response = yield call(
      api.get,
      `reviews/search.json?query=${query}&reviewer=${reviewer}&api-key=${apiConfig.key}`
    );

    const result = response.data.results[0];

    const review = {};
    review.id = bcrypt.hashSync(`${query}${reviewer}`, 8);
    review.reviewTitle = result.display_title;
    review.reviewDescription = result.summary_short;
    review.reviewDate = new Date(result.publication_date);
    review.reviewImage = result.multimedia.src;
    review.reviewUrl = result.link.url;
    review.criticName = result.byline;
    review.criticsPick = !!result.critics_pick;

    yield put(addToFavoritesSuccess(review));
  } catch (err) {
    yield put(addToFavoritesFailure());
  }
}

export default all([takeLatest('@favorites/ADD_REQUEST', addToFavorites)]);
