import { all } from 'redux-saga/effects';

import reviews from './reviews/sagas';
import favorites from './favorites/sagas';

export default function* rootSaga() {
  return yield all([reviews, favorites]);
}
