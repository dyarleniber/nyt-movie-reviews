import bcrypt from 'bcryptjs';
import { toast } from 'react-toastify';
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

    const reviewTitle = result.display_title;
    const criticName = result.byline;
    const id = bcrypt.hashSync(`${reviewTitle}${criticName}`, 8);
    const image = result.multimedia ? result.multimedia.src : null;
    const url = result.link ? result.link.url : null;

    const review = {};
    review.id = id;
    review.reviewTitle = reviewTitle;
    review.reviewDescription = result.summary_short;
    review.reviewDate = new Date(result.publication_date);
    review.reviewImage = image;
    review.reviewUrl = url;
    review.criticName = criticName;
    review.criticsPick = !!result.critics_pick;

    toast.success(`${review.reviewTitle} added to favorites`);

    yield put(addToFavoritesSuccess(review));
  } catch (err) {
    toast.error('Failed to add to favorites');

    yield put(addToFavoritesFailure());
  }
}

export default all([takeLatest('@favorites/ADD_REQUEST', addToFavorites)]);
