import { all } from 'redux-saga/effects';

import reviews from './reviews/sagas';

export default function* rootSaga() {
  return yield all([reviews]);
}
