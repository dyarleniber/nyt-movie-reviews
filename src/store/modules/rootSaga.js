import { all } from 'redux-saga/effects';

import reviews from './reviews/sagas';
import critics from './critics/sagas';

export default function* rootSaga() {
  return yield all([reviews, critics]);
}
