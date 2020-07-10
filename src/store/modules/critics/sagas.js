import { toast } from 'react-toastify';
import { takeLatest, put, all } from 'redux-saga/effects';

import GetCriticsService from '../../../services/GetCriticsService';
import { searchCriticsSuccess, searchCriticsFailure } from './actions';

export function* searchCritics() {
  try {
    const response = yield GetCriticsService.constructor.run();

    if (response.success) {
      const critics = response.data;

      yield put(searchCriticsSuccess(critics));
    } else {
      toast.error('Failed to load data. Please, try again later.');

      yield put(searchCriticsFailure());
    }
  } catch (err) {
    toast.error('Failed to load data. Please, try again later.');

    yield put(searchCriticsFailure());
  }
}

export default all([takeLatest('@critics/SEARCH_REQUEST', searchCritics)]);
