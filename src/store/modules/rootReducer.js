import { combineReducers } from 'redux';

import reviews from './reviews/reducer';
import critics from './critics/reducer';
import favorites from './favorites/reducer';

export default combineReducers({ reviews, critics, favorites });
