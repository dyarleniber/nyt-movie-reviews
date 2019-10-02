import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';
import apiConfig from '../../../config/api';

import { criticsSuccess, criticsFailure } from './actions';

export function* searchCritics() {
  try {
    const response = yield call(
      api.get,
      `critics/all.json?api-key=${apiConfig.key}`
    );

    yield put(criticsSuccess(response.data));
  } catch (err) {
    yield put(criticsFailure());
  }
}

export default all([takeLatest('@critics/CRITICS_REQUEST', searchCritics)]);
