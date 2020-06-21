import bcrypt from 'bcryptjs';
import { toast } from 'react-toastify';
import { takeLatest, put, all } from 'redux-saga/effects';

import GetReviewsService from '../../../services/GetReviewsService';

import { addToFavoritesSuccess, addToFavoritesFailure } from './actions';

export function* addToFavorites({ payload }) {
  try {
    const response = yield GetReviewsService.constructor.run({ ...payload });

    const result = response.data[0];

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
