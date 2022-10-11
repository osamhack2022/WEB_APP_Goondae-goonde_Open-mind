import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import auth, { authSaga } from './auth';
import user, { userSaga } from './user';
import location, { locationSaga } from './location';
import locations, { locationsSaga } from './locations';
import write, { writeSaga } from './write';
import post, { postSaga } from './post';
import posts, { postsSaga } from './posts';

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
});

export function* rootSaga() {
  yield all([
    authSaga(),
    userSaga(),
    locationSaga(),
    locationsSaga(),
    writeSaga(),
    postSaga(),
    postsSaga(),
  ]);
}

export default rootReducer;
