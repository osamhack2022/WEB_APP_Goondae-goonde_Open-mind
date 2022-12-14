import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import auth, { authSaga } from './auth';
import user, { userSaga } from './user';
import location, { locationSaga } from './location';
import locations, { locationsSaga } from './locations';
import write, { writeSaga } from './write';
import post, { postSaga } from './post';
import posts, { postsSaga } from './posts';
import markers, { markersSaga } from './markers';
import reviews, { reviewsSaga } from './reviews';
import tmos, { tmosSaga } from './tmos';
import tmo, { tmoSaga } from './tmo';
import mous, { mousSaga } from './mous';
import mou, { mouSaga } from './mou';

import loading from './loading';

const rootReducer = combineReducers({
  auth,
  location,
  locations,
  write,
  post,
  posts,
  loading,
  user,
  markers,
  reviews,
  tmos,
  tmo,
  mous,
  mou,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    userSaga(),
    locationSaga(),
    locationsSaga(),
    writeSaga(),
    markersSaga(),
    postSaga(),
    postsSaga(),
    reviewsSaga(),
    tmosSaga(),
    tmoSaga(),
    mousSaga(),
    mouSaga(),
  ]);
}

export default rootReducer;
