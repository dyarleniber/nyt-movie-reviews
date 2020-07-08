import { combineReducers } from 'redux';

import reviews from './reviews/reducer';
import favorites from './favorites/reducer';

export default combineReducers({ reviews, favorites });
